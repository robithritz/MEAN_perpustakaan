var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	title: {
		type: String,
		required: false
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: false
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

var Genry = module.exports = mongoose.model('genres', genreSchema);
var Booky = module.exports = mongoose.model('books', bookSchema);

module.exports.getGenres = function(callback, limit){
	Genry.find(callback);
}
module.exports.getBooks = function(callback,limit){
	console.log('dapet dari sono nya' + limit);
	Booky.find(callback).limit(limit);
}

