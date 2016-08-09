'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favoriteColor: String
});

export default mongoose.model('Cat', catSchema);