const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    coordinates: {
        longitude: Number,
        latitude: Number
    },
    reviews: {
        type: [Schema.Types.ObjectId],
        ref: 'Review',
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

listingSchema.post('findOneAndDelete', async (listing) =>  {
    if (listing) {
        await Review.deleteMany({
            _id: {
                $in: listing.reviews,
            }
        });
    }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
// In the above code snippet, we have a model for a listing in a project called wanderlust. The model is defined in the listing.js file. The model is created using the mongoose.model method, which takes two arguments: the name of the model ('Listing') and the schema (listingSchema). The schema defines the structure of the listing object, including properties like title, description, image, price, location, and country. The Listing model is then exported for use in other parts of the application. This model can be used to interact with the MongoDB database to perform operations like creating, reading, updating, and deleting listings.