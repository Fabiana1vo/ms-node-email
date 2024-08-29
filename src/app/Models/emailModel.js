const mongoose = require('mongoose');

const EmailModel = mongoose.model('Email', {

    ownerRef: {
        type: String,
        required: true
    },

    from: {
        type: String,
        required: true
    },

    to: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    send_date_email: {
        type: Date,
        default: Date.now
    },

    status_email: {
        type: String,
        enum: ['sent', 'failed'],
    }

})

module.exports = EmailModel