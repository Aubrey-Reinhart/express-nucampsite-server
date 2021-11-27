const express = require('express');
const cors = require('./cors');
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');

const campsiteRouter = express.Router();

favoriteRouter.route('/')
.get()
.post()
.delete()

favoriteRouter.route('/:campsiteId')
.post()
.delete()

module.exports = favoriteRouter;