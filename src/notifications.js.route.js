const express = require('express');
const Notif = require('./customer');

const router = express.Router();

                                                                                                                                                                                                                             
router.post('https://onesignal.com/api/v1/notifications', async (req, res) => {
    const body = req.body;
    const cust = await Notif.findOne({name: body.name}).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    if (cust) {
        return res.json({text: 'user sudah diinput'});
    }

    const result = await Notif.create({ name: body.name }).catch((err) => { 
        console.error(err);
        res.json({text: 'internal error'}); 
    });

    res.json(result);
});

module.exports = router;