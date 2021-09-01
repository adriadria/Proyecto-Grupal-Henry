const { Router } = require('express');
const Category = require('../models/Category');

const router = Router();

router.post('/', async (req, res) => {
    const {name} = req.body;
    try{
        const category = new Category({name});
        await category.save();
        return res.status(200).send(`${name} category successfully created`);
    }catch(e){
        console.error(e);
    }
});

module.exports = router;