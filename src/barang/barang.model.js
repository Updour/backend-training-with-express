var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var options = { new: true }; 
BarangSchema = new Schema({
    nama : String,
    kode : String,
    kategori : String,
    satuan : String,
    harga : String,
    // stock : String,
    // sisaStock : String,
    berat : String,
    deskripsi : String,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Barang', BarangSchema);

// const BarangSchema = new mongoose.Schema({
// 	nama:{type:String, required:true},
// 	kode :{type:String},
// 	kategori:{type:String},
// 	satuan:{type:String},
// 	harga:{type:String},
// 	berat:{type:String},
// 	deskripsi:{type:String},
// 	updated: { type: Date, default: Date.now },
// 	_someId: Schema.Types.ObjectId
// });


// const Barang = mongoose.model('Barang', BarangSchema);
// module.exports = mongoose.model('Barang', BarangSchema);

// // module.exports = mongoose.model('Barang');
// module.exports = Barang;
// BarangSchema.virtual('updatedAt').get(function () {
//   	return moment(this.updated).format('LT');
// });

// BarangSchema.path('updated').set(function(value) {
//     console.log("value: " + value);
//     value="FFF";
//     this.updated = moment(this.updated).format('LT');
//     return value;
// })
// router.get('/Barang/:id', (req, res) => {
//     Barang.findOne({_id: req.params.id}, null, function (err, Barang) {
//         if (err) return console.error(err);
//         let item = Barang.updatedAt
//         let newBarang = Object.assign(Barang.toJSON(), {'updatedAt': item});
//         console.log(newBarang)
//         res.json(newBarang);
//     });
// });