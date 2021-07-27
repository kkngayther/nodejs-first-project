const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
slug = require('mongoose-slug-generator');

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

// Add Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: true,
    deletedAt : true, 
});

module.exports = mongoose.model('Course', Course);