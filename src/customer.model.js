const mongoose = require('mongoose');

// create a model
const Customer = mongoose.model('customer', new mongoose.Schema({
    name: 'string',
    address: 'string'
}));

module.exports = Customer;