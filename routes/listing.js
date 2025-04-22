const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {isLoggedIn, isOwner, validateListing} = require('../middleware.js');
const multer  = require('multer')
const {storage} = require('../cloudConfig.js');
const upload = multer({ storage })

const {
    index,
    renderNewForm,
    createListings,
    showListings,
    editListings,
    updateListings,
    deleteListings
} = require('../controllers/listings.js');

//index route
router.get('/', wrapAsync(index));

//new route
router.get('/new', isLoggedIn, renderNewForm);

//create route
router.post('/',isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(createListings));

//show route
router.get('/:id', wrapAsync(showListings));

//edit route
router.get('/:id/edit',isLoggedIn, isOwner, wrapAsync(editListings));

//update route
router.put('/:id',isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(updateListings));

//delete route
router.delete('/:id',isLoggedIn, isOwner, wrapAsync(deleteListings));

module.exports = router;