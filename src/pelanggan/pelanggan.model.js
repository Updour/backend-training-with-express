const mongoose = require('mongoose');

// create a model
const Pelanggan = mongoose.model('Pelanggan', new mongoose.Schema({
   // _id: 'mongoose.Schema.Types.ObjectId',
    nama:           'string',
    tanggal_lahir:  'string',
    tempat_lahir:   'string',
    alamat:         'string',
    pekerjaan:      'string',
    jenis_kelamin:  'string',
    // no_NPWP:        'string',
    email:          'string',
    nomor_hp:       'string',
    updated: { type: Date, default: Date.now }
}));

module.exports = Pelanggan;