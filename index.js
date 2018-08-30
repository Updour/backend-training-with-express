const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CustomerRouter = require('./src/customer.route'); //customer
const BarangRouter = require('./src/barang/barang.route'); // barang
const SalesRouter = require('./src/sales/sales.route'); // sales
const PelangganRouter = require('./src/pelanggan/pelanggan.route'); // pelanggan
const Notif = require('/src/notifications')
mongoose.connect('mongodb://localhost:27017/toko');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
<<<<<<< HEAD
   console.log('success');
=======
   console.log('koneksi berhasil ke mongodb');
>>>>>>> b340a950f89134cd01c89bbd66dc52dbd69e474e
});
//for customer
app.get('/', (req, res) => res.send('Hello World!'));
app.use(CustomerRouter);
//for barang
app.get('/', (req, res) => res.send('ini barang!'));
app.use(BarangRouter);
//for Sales
app.get('/', (req, res) => res.send('ini sales!'));
app.use(SalesRouter);
//for pelanggan
app.get('/', (req, res) => res.send('ini sales!'));
app.use(PelangganRouter);
app.get('/', (req, res) => res.send('notification'))
app.use(Notif)

app.listen(3000, () => console.log('Example app listening on port 3000!'));