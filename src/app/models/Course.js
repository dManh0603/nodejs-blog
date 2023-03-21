const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const slug = require('mongoose-slug-generator');

const Course = new Schema({
    name: { type: String, maxLength: 600, },
    slug: { type: String, slug: 'name', unique: true, },
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);