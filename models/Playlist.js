const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
	ytid: String,
	title: String,
	videos: [String]
}, {timestamps: true});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;