const express = require('express');
const Customer = require('./customer.model');

const router = express.Router();


router.get('/customers', (req, res) => {
    Customer.find({}, null, function (err, customer) {
        if (err) return console.error(err);
        res.json(customer);
    });
});

router.get('/customer/:id', (req, res) => {
    Customer.findOne({_id: req.params.id}, null, function (err, customer) {
        if (err) return console.error(err);
        res.json(customer);
    });
});
                                                                                                                                                                                                                               
router.post('/customer', async (req, res) => {
    const body = req.body;
    const cust = await Customer.findOne({name: body.name}).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    if (cust) {
        return res.json({text: 'user sudah diinput'});
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

    const result = await Customer.create({ name: body.name, address: body.address }).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    res.json(result);
});

module.exports = router;