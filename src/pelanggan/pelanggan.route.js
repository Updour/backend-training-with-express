const express = require('express');
const Pelanggan = require('./pelanggan.model');

const router = express.Router();

router.get('/Pelanggan', (req, res) => {
    Pelanggan.find({}, null, function (err, Pelanggan) {
        if (err) return console.error(err);
        res.json(Pelanggan);
    });
});

router.get('/Pelanggan/:id', (req, res) => {
    Pelanggan.findOne({_id: req.params.id}, null, function (err, Pelanggan) {
        if (err) return console.error(err);
        res.json(Pelanggan);
    });
});
                                                                                                                                                                                                                               
router.post('/Pelanggan', async (req, res) => {
    const body = req.body;
    const cust = await Pelanggan.findOne({nama: body.nama}).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    if (cust) {
        return res.json({text: 'name Pelanggan sudah diinput'});
    }

    /*
    Customer.findOne({name: body.name}, (err, customer) => {
        if (err) return console.error(err);
        if (customer) return res.json({text: 'user sudah diinput'});

        Customer.create({ name: body.name, address: body.address }, (err, result) => {
            if (err) return console.error(err);
            res.json(result);
        });
    });
    */
    const result = await Pelanggan.create({ 
        nama: body.nama, 
        tanggal_lahir: body.tanggal_lahir,
        tempat_lahir: body.tempat_lahir,
        alamat: body.alamat,
        pekerjaan: body.pekerjaan,
        jenis_kelamin: body.jenis_kelamin,
        no_NPWP: body.no_NPWP,
        email: body.email,
        nomor_hp: body.nomor_hp
     }).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    res.json(result);
});


// untuk update 
router.put('/Pelanggan/:id', function (req, res) {
    Pelanggan.findOneAndUpdate({
        _id: req.params.id
    },
    {
        $set : req.body }
        ,{
            upsert : true
        }, function(err, newPelanggan){
            if(err){
                console.log('error internal');
            }else {
                console.log('newPelanggan');
                // res.send(204);
                res.json(newPelanggan);
            }
    })  
});

//untuk delete
router.delete('/Pelanggan/:id', function (req, res) {
    Pelanggan.findOneAndRemove({
        _id: req.params.id
    },
    function(err, Pelanggan){
            if(err){
                console.log('error deleting');
            }else {
                console.log('Pelanggan');
                res.json(Pelanggan);
            }
    })  
});


module.exports = router;