const mongoose = require('mongoose');

// create a model
const Notif = mongoose.model('notifications', new mongoose.Schema({
    name: 'string',
}));

module.exports = Notif;