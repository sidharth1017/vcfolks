const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
    },
    month: {
        type: String,
    },
    author: {
        type: [String],
        required: true
    },
    author_type: {
        type: [String],
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    reportlink: {
        type: String,
        required: true
    },
    market: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: false,
    },

}, {
    timestamps: true,
    toJSON: {getters: true},
});

module.exports = mongoose.model('Report', ReportSchema, 'reports');