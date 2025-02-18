const mongoose = require("mongoose");
const Restaurant = require("../models/restaurants");
const Review = require("../models/review");

const users =
    [
        { _id: '66954b86410c6711f2dcb45e' },
        { _id: '66954b9d410c6711f2dcb5a4' },
        { _id: '66954bb9410c6711f2dcb6ea' },
        { _id: '66954bce410c6711f2dcb830' },
        { _id: '66954be2410c6711f2dcb976' },
        { _id: '66954bf1410c6711f2dcbabc' },
        { _id: '66954c02410c6711f2dcbc02' },
        { _id: '66954c12410c6711f2dcbd48' },
        { _id: '66954c43410c6711f2dcbe8e' },
        { _id: '66954c65410c6711f2dcbfd4' }
    ]

const ratings = [
    { rating: 4, body: "The food was delicious and the service was excellent. We really enjoyed our meal here. The ambiance was cozy, and the staff was attentive. We will definitely be coming back for more." },
    { rating: 5, body: "Absolutely fantastic experience! The ambiance was perfect, and every dish was amazing. The chef's special was a real treat, and the desserts were to die for. Highly recommended for special occasions." },
    { rating: 3, body: "The food was decent, but the service could be improved. Overall, an average experience. Some dishes were better than others, and the wait time was a bit long. Worth a try but not a must-visit." },
    { rating: 2, body: "Not very impressed with the food or service. We expected more from this place. The dishes lacked flavor, and the service was slow. Unfortunately, it didn't live up to the hype." },
    { rating: 5, body: "Best dining experience ever! Everything from the appetizers to the dessert was perfect. The staff was friendly and knowledgeable, and the atmosphere was just right. We'll be returning soon." },
    { rating: 4, body: "Delicious food with a variety of flavors. Service was attentive and friendly. The ambiance was cozy and welcoming." },
    { rating: 3, body: "Decent meal, but nothing exceptional. Service was average. The atmosphere was casual and relaxed." },
    { rating: 5, body: "Absolutely fantastic experience! Every dish was superb. The service was impeccable. Can't wait to return!" },
    { rating: 2, body: "Disappointing meal. Food was bland and overpriced. Service was slow and inattentive. Wouldn't recommend." },
    { rating: 4, body: "Great dining experience overall. Food was tasty, and the service was efficient. Enjoyed the evening." },
    { rating: 1, body: "Horrible food quality. Dishes were undercooked and tasteless. Service was rude and unprofessional." },
    { rating: 3, body: "Average food with decent service. The atmosphere was lively but a bit noisy." },
    { rating: 5, body: "Exceptional! Every course was a delight. Service was top-notch, and the setting was elegant." },
    { rating: 2, body: "Mediocre experience. Food was okay, but not worth the price. Service was slow and indifferent." },
    { rating: 4, body: "Lovely evening with delicious food. Service was attentive, and the atmosphere was charming." },
    { rating: 3, body: "Fair meal with friendly service. The ambiance was cozy but a bit cramped." },
    { rating: 5, body: "Outstanding dining experience! Flavors were exquisite, and service was exceptional. Highly recommend!" },
    { rating: 1, body: "Terrible! Food was cold and tasteless. Service was non-existent. Worst dining experience ever." },
    { rating: 4, body: "Excellent meal with flavorful dishes. Service was prompt and courteous. Enjoyed every bite." },
    { rating: 3, body: "Decent food, but service could have been better. The atmosphere was casual and relaxed." },
    { rating: 2, body: "Below average experience. Food was disappointing, and service was slow. Wouldn't come back." },
    { rating: 5, body: "Perfect evening! Every dish was a masterpiece. Service was impeccable, and the ambiance was romantic." },
    { rating: 4, body: "Wonderful dinner with great flavors. Service was friendly and efficient. Would visit again." },
    { rating: 3, body: "Okay food with average service. The atmosphere was nice but a bit crowded." },
    { rating: 1, body: "Awful experience. Food was terrible, and service was rude. Will never return." }

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
