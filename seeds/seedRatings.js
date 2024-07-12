const mongoose = require("mongoose");
const Restaurant = require("../models/restaurants");
const Review = require("../models/review");

const users = [
    { _id: '66911201c3f6b9539fd5a8d6' },
    { _id: '669124c85c27d702db764322' },
    { _id: '669124d95c27d702db764468' },
    { _id: '669124ee5c27d702db7645ae' },
    { _id: '669124fe5c27d702db7646f4' },
    { _id: '6691250f5c27d702db76483a' },
    { _id: '6691252d5c27d702db764980' },
    { _id: '6691253d5c27d702db764ac6' },
    { _id: '669125535c27d702db764c0c' },
    { _id: '669125655c27d702db764d52' }
];

const ratings = [
    { rating: 4, body: "The food was delicious and the service was excellent. We really enjoyed our meal here. The ambiance was cozy, and the staff was attentive. We will definitely be coming back for more." },
    { rating: 5, body: "Absolutely fantastic experience! The ambiance was perfect, and every dish was amazing. The chef's special was a real treat, and the desserts were to die for. Highly recommended for special occasions." },
    { rating: 3, body: "The food was decent, but the service could be improved. Overall, an average experience. Some dishes were better than others, and the wait time was a bit long. Worth a try but not a must-visit." },
    { rating: 2, body: "Not very impressed with the food or service. We expected more from this place. The dishes lacked flavor, and the service was slow. Unfortunately, it didn't live up to the hype." },
    { rating: 5, body: "Best dining experience ever! Everything from the appetizers to the dessert was perfect. The staff was friendly and knowledgeable, and the atmosphere was just right. We'll be returning soon." },
    // Add more ratings as needed...
];

const altalsDB = "mongodb://user123:user123@ac-zmjq9rq-shard-00-00.fgtkwo0.mongodb.net:27017,ac-zmjq9rq-shard-00-01.fgtkwo0.mongodb.net:27017,ac-zmjq9rq-shard-00-02.fgtkwo0.mongodb.net:27017/?ssl=true&replicaSet=atlas-ohe4g3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster4";
const localDB = "mongodb://localhost:27017/rate-them";

mongoose.connect(altalsDB)
    .then(() => {
        console.log('Connected to MongoDB');
        seedRatings();
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const seedRatings = async () => {
    try {
        const restaurants = await Restaurant.find({});
        for (const restaurant of restaurants) {
            for (let i = 0; i < 5; i++) {  // Generate 5 reviews per restaurant
                const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
                const review = new Review({
                    ...randomRating,
                    author: users[Math.floor(Math.random() * users.length)]._id,
                    restaurant: restaurant._id  // Assuming your Review model has a restaurant field
                });
                await review.save();
                restaurant.reviews.push(review._id); // Assuming you store review IDs in restaurant's reviews array
            }
            await restaurant.save(); // Save the restaurant after adding reviews
        }
        console.log('Seeding completed successfully');
    } catch (error) {
        console.error('Error during seeding:', error);
    } finally {
        mongoose.connection.close();
    }
};
