const Category = require('../models/Category');

async function getCategories(){
    return await Category.find();
}

module.exports = getCategories