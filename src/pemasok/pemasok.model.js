var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var options = { new: true }; 

BarangSchema = new Schema({
    kode : String,
    nama : String,
    alamat : String,
    no_rek : String,
    no_hp : String,
    website : String,
    owner : String,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Barang', BarangSchema);
