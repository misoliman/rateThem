const mongoose = require("mongoose")
const Review = require("./review")
const { string } = require("joi")
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    url: String,
    filename: String
})

ImageSchema.virtual("thumbnail").get(function () {
    return this.url.replace("/upload", "/upload/w_200")
})

const RestaurantSchema = new Schema({
    name: String,
    cuisine: String,
    location: String,
    geometry: {
        type: {
            type: String,
            enum: ["Point"]
        },
        coordinates: {
            type: [Number]
        }
    },
    price: String,
    description: String,
    image: [ImageSchema],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdOn: String



})

RestaurantSchema.post("findOneAndDelete", async function (document) {
    if (document) {
        await Review.deleteMany({
            _id: {
                $in: document.reviews
            }
        })
    }

})


module.exports = mongoose.model("Restaurant", RestaurantSchema)