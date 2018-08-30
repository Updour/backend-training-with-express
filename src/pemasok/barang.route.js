const express = require('express');
const Barang = require('./barang.model');
const mongoose = require('mongoose');
// mongoose.Types.ObjectId.isValid('5ad5af39cc91082460a37520');

const router = express.Router();


router.get('/barang', (req, res) => {
    Barang.find({}, null, function (err, Barang) {
        if (err) return console.error(err);
        res.json(Barang);
    });
});

router.get('/Barang/:id', (req, res) => {
    Barang.findOne({_id: req.params.id}, null, function (err, Barang) {
        if (err) return console.error(err);
        res.json(Barang);
    });
});
                                                                                                                                                                                                                               
router.post('/Barang', async (req, res) => {
    const body = req.body;
    const cust = await Barang.findOne({nama: body.nama}).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });
    // const sort = await
    Barang.find({}, null, {sort: {date: 1}}, function(err, docs) { 
        if(err){
            return console.log(err)
        }else{
             res.json(Barang);
        }

     });
    if (cust) {
        return res.json({text: 'barang sudah diinput'});
    }



    const result = await Barang.create({ 
        nama: body.nama, 
        kode: body.kode,
        kategori: body.kategori,
        satuan: body.satuan,
        harga: body.harga,
        berat: body.berat,
        deskripsi: body.deskripsi
     }).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    res.json(result);
});

// router.put('/barang/:id', (req, res) => {
//     console.log(req.params.id);
//         let id = req.params.id;
//             console.log(id);
//     Barang.findByIdAndUpdate(id, 
//         function(err, Barang) {
//       if (err) {
//         res.send(err);
//       }else{
//         res.send('sukses');
//       }
//     });
//     res.json(Barang);

// });
// data._id = ObjectID(data._id) if data._id


    router.put('/Barang/:id', function(req, res) {
  const doc = {
        nama: req.body.nama, 
        kode: req.body.kode,
        kategori: req.body.kategori,
        satuan: req.body.satuan,
        harga: req.body.harga,
        berat: req.body.berat,
        deskripsi: req.body.deskripsi,
    updated: Date.now()
  }
  Barang.update({_id: req.params.id}, doc, function(err, Barang) {
    if (err) {
      res.send(err);
    }else{
        res.send(Barang);
    }
    
  });
});

router.delete('/barang/:_id', function(req, res) {
    console.log(req.params._id);
    let id = req.params._id;
    console.log(id)
    Barang.remove({
        _id : id
    }, function(err) {
        if (err)
            res.send(err);
        else
            res.send('Successfully! Barang has been Deleted.');   
    });
});
// // router.delete('/Barang/:_id', function(req, res){
// //     Barang.findByIdAndRemove(id, function(err1, doc1) { // doc here is actually err
// //         // handle err1
// //         console.log('findByIdAndRemove doc: ', doc1);
// //         Barang.find({}, function(err2, docs) {
// //           console.log('Finding all: ', docs)
// //         })
// //       });
// //     res.json(Barang);
// // });


// //get all employee data from db
// router.get('/barang', function(req, res) {
//  // use mongoose to get all todos in the database
//  Barang.find(function(err, Barang) {
//  // if there is an error retrieving, send the error otherwise send data
//  if (err)
//  res.send(err)
//  res.json(Barang); // return all employees in JSON format
//  });
// });

// // get a employee with ID of 1
// router.get('/barang/:_id', function(req, res) {
//  let id = req.params._id;
//  Barang.findById(id, function(err, Barang) {
//  if (err)
//  res.send(err)
 
//  res.json(Barang);
//  });
 
// });

// // create employee and send back all employees after creation
// router.post('/barang', function(req, res) {
//     // create mongose method to create a new record into collection
//     Barang.create({
//         nama : req.body.nama,
//         kode : req.body.kode,
//         kategori : req.body.kategori,
//         satuan : req.body.satuan,
//         harga : req.body.harga,
//         berat : req.body.berat,
//         deskripsi : req.body.deskripsi
//     }, function(err, employee) {
//         if (err)
//             res.send(err);

//         // get and return all the employees after newly created employe record
//         Barang.find({},function(err, Barang) {
//             if (err)
//                 res.send(err)
//             res.json(Barang);
//         });
//     });

// });

// // create employee and send back all employees after creation
// router.put('/barang/:_id', function(req, res) {
//     // create mongose method to update a existing record into collection
//     let id = req.params._id;
//     var data = {
//         nama : req.body.nama,
//         kode : req.body.kode,
//         kategori : req.body.kategori,
//         satuan : req.body.satuan,
//         harga : req.body.harga,
//         berat : req.body.berat,
//         deskripsi : req.body.deskripsi
//     }

//     // save the user
//     Barang.findByIdAndUpdate(id, data, function(err, Barang) {
//     if (err) throw err;

//     res.send('Successfully! Barang updated - '+Barang.nama);
//     });
// });

// // delete a employee by id
// router.delete('/barang/:_id', function(req, res) {
//     console.log(req.params._id);
//     let id = req.params._id;
//     console.log(id)
//     Barang.remove({
//         _id : id
//     }, function(err) {
//         if (err)
//             res.send(err);
//         else
//             res.send('Successfully! Barang has been Deleted.');   
//     });
// });


//     /*
//     Customer.findOne({name: body.name}, (err, customer) => {
//         if (err) return console.error(err);
//         if (customer) return res.json({text: 'user sudah diinput'});

//         Customer.create({ name: body.name, address: body.address }, (err, result) => {
//             if (err) return console.error(err);
//             res.json(result);
//         });
//     });
//     */
module.exports = router;