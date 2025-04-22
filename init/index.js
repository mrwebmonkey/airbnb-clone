const mongoose = require('mongoose');
const initData = require('./data');
const Listing = require('../models/listing');

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/wanderlust');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '67ffe5d73fb910439bfd26cb'}));
    await Listing.insertMany(initData.data);
    console.log('Data inserted');
}
initDB(); // Calling the function to insert data into the database