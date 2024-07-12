const mongoose = require("mongoose")
const Restaurant = require("../models/restaurants")
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapBoxToken = "pk.eyJ1IjoibWlzb2xpbWFuODkiLCJhIjoiY2x4cGhhcXRvMDJqMTJqczdlZHM4N3kyYyJ9.dwetzOKl42j3sM1mfExEag"
const geoCoder = mbxGeocoding({ accessToken: mapBoxToken })


const getCoordinates = async (location) => {
    const geoData = await geoCoder.forwardGeocode({
        query: location,
        limit: 1
    }).send()
    return geoData.body.features[0].geometry

}

const altalsDB = "mongodb://user123:user123@ac-zmjq9rq-shard-00-00.fgtkwo0.mongodb.net:27017,ac-zmjq9rq-shard-00-01.fgtkwo0.mongodb.net:27017,ac-zmjq9rq-shard-00-02.fgtkwo0.mongodb.net:27017/?ssl=true&replicaSet=atlas-ohe4g3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster4";
const localDB = "mongodb://localhost:27017/rate-them";

mongoose.connect(altalsDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const seedLocations = async () => {

    try {
        let restaurants = await Restaurant.find({});
        for (let restaurant of restaurants) {

            const newCoordinates = await getCoordinates(restaurant.location);
            if (newCoordinates) {
                restaurant.geometry = newCoordinates;
                await restaurant.save();

            }
        }
        restaurants = await Restaurant.find({});
    } catch (error) {
        console.error('Error updating locations:', error);
    } finally {
        mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    }

}


seedLocations().then(() => {
    mongoose.connection.close()
})

