const express = require('express');
const Sales = require('./sales.model');
const router = express.Router();

const mongoose = require('mongoose');


router.get('/sales', (req, res) => {
    Sales.find({}, null, function (err, Sales) {
        if (err) return console.error(err);
        res.json(Sales);
    });
});

router.get('/Sales/:id', (req, res) => {
    Sales.findOne({_id: req.params.id}, null, function (err, Sales) {
        if (err) return console.error(err);
        res.json(Sales);
    });
});
                                                                                                                                                                                                                               


//validasi nama sudah di input 
                                                                                                                                                                                                                              
router.post('/Sales', async (req, res) => {
    const body = req.body;
    const cust = await Sales.findOne({nama: body.nama}).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });
    // const sort = await
    Sales.find({}, null, {sort: {date: 1}}, function(err, docs) { 
        if(err){
            return console.log(err)
        }else{
             res.json(Sales);
        }

     });
    if (cust) {
        return res.json({text: 'Sales sudah diinput'});
    }
    const result = await Sales.create({ 
        nama: body.nama, 
        divisi: body.divisi,
        alamat: body.alamat,
        email: body.email,
        nomor_hp: body.nomor_hp
     }).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    res.json(result);
});


    router.put('/Sales/:id', function(req, res) {
  const doc = { 
        nama: req.body.nama, 
        divisi: req.body.divisi,
        alamat: req.body.alamat,
        email: req.body.email,
        nomor_hp: req.body.nomor_hp,
        updated: Date.now()
  }
  Sales.update({_id: req.params.id}, doc, function(err, Sales) {
    if (err) {
      res.send(err);
    }else{
        res.send(Sales);
    }
    
  });
});

//for delete
router.delete('/Sales/:_id', function(req, res) {
    console.log(req.params._id);
    let id = req.params._id;
    console.log(id)
    Sales.remove({
        _id : id
    }, function(err) {
        if (err)
            res.send(err);
        else
            res.send('Successfully! Sales has been Deleted.');   
    });
});


module.exports = router;