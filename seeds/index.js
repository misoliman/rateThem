const mongoose = require("mongoose");
const Restaurant = require("../models/restaurants");
const fetchData = require("./data");

const altalsDB = "mongodb://user123:user123@ac-zmjq9rq-shard-00-00.fgtkwo0.mongodb.net:27017,ac-zmjq9rq-shard-00-01.fgtkwo0.mongodb.net:27017,ac-zmjq9rq-shard-00-02.fgtkwo0.mongodb.net:27017/?ssl=true&replicaSet=atlas-ohe4g3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster4";
const localDB = "mongodb://localhost:27017/rate-them";

mongoose.connect(altalsDB)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const seedDB = async () => {
    try {
        const restaurants = await fetchData();
        await Restaurant.deleteMany({});
        for (let i = 0; i < restaurants.length; i++) {
            const restaurantDB = new Restaurant(restaurants[i]);
            await restaurantDB.save();
        }
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
