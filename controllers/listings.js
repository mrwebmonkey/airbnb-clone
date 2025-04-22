const Listing = require('../models/listing.js');
const NodeGeocoder = require('node-geocoder'); // map

const options = {
  provider: 'openstreetmap',
};
const geocoder = NodeGeocoder(options);
  

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render('new.ejs');
}

module.exports.createListings = async (req, res, next) => {
    const {location, country} = req.body.listing;
    const coordinates = (`${location} ${country}`);
    const result = await geocoder.geocode(coordinates);
    let longitude = result[0].longitude;
    let latitude = result[0].latitude;

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;

    newListing.image = {url, filename};

    newListing.coordinates = {longitude, latitude};

    await newListing.save();
    req.flash("success", "new listing created !");
    res.redirect('/listings');    
}

module.exports.showListings = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({path:'reviews', populate: {path: 'author',}}).populate('owner');
    if(!listing) {
        req.flash("error", "listing you requested for does not exist !");
        res.redirect('/listings');
    }
    res.render('show.ejs', { listing });
}

module.exports.editListings = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "listing you requested for does not exist !");
        res.redirect('/listings');
    }
    
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_200");

    res.render('edit.ejs', { listing, originalImageUrl });
}

module.exports.updateListings = async (req, res) => {
    const { id } = req.params;
    let listings = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listings.image = {url, filename};
        await listings.save();
    }

    res.redirect("/listings/" + id);
}

module.exports.deleteListings = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "listing deleted !");
    res.redirect('/listings');
}