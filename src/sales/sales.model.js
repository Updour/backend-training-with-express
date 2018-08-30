const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var options = { new: true }; 
// create a model
 
SalesSchema = new Schema({
    nama: String,
    divisi: String,
    alamat: String,
    email: String,
    nomor_hp: String,
    updated: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Sales', SalesSchema);