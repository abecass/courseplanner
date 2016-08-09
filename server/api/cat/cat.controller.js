'use strict';

var mongoose = require('mongoose');

var Cat = require('./cat.model');

//find a single cat
export function getById(req, res) {
	Cat.findByIdAsync(req.params.id)
	.then(function(cat) {
		if (!cat) {
			res.status(404).end();
			return null;
		} else {
			return cat;
		}
		res.status(200).json(cat);
	})
	.then(function(cat) {
		if(cat) {
			res.status(200).json(cat);
		}
	})
	.catch(function(err) {
		return res.status(500).send(err);
	});
}


//get cats
export function getAll(req, res) {
	Cat.findAsync()
	.then(function(cats) {
		res.status(200).json(cats);
	})
	.catch(function(err) {
		return res.status(500).send(err);
	});
};


//create a cat
export function create(req, res) {
	Cat.createAsync(req.body)
    .then(function(cat) {
    	res.status(200).json(cat);
    })
    .catch(function(err) {
    	return res.status(500);
    });

};	

//delete a cat
export function deleteCat(req, res) {
	Cat.findOneAndRemoveAsync(req.params.id)
	.then(function() {
		res.status(204).end();
	})
	.catch(function(err) {
		return res.status(500).send(err);
	});
}

//update a cat
export function update(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Cat.findOneAndUpdateAsync(req.params.id, req.body, {new: true})
	.then(function(cat) {
		res.status(200).json(cat);
	})
	.catch(function(err) {
		return res.status(500).send(err);
	});
}