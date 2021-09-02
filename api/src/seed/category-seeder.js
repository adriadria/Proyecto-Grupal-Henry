const Category = require('../models/Category');
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/requests');

const categories = [
    new Category({
        image_url: 'https://i.pinimg.com/564x/a0/f8/59/a0f8599693c240ae3a198e3c88a27afa.jpg',
        name: 'Cocina',
        products:[]
    }),
    new Category({
        image_url: 'https://i.pinimg.com/originals/58/85/20/588520c9a6731dfc295e28443b2a5f46.jpg',
        name: 'Living',
        products:["612fa75dcc6179bffcbde5ed", "612fa75dcc6179bffcbde5ee", "612fa75dcc6179bffcbde5ef", "612fa75dcc6179bffcbde5f0", "612fa75dcc6179bffcbde5f1", "612fa75dcc6179bffcbde5f2", "612fa75dcc6179bffcbde5f3", "612fa75dcc6179bffcbde5f4", "612fa75dcc6179bffcbde5f5", "612fa75dcc6179bffcbde5f6", "612fa75dcc6179bffcbde5e8", "612fa75dcc6179bffcbde5e9", "612fa75dcc6179bffcbde5ea", "612fa75dcc6179bffcbde5eb", "612fa75dcc6179bffcbde5ec"]
    }),
    new Category({
        image_url: 'https://desillas.com/img/Categoryos/EJKREB_32.jpg',
        name: 'Dormitorio',
        products:["612fa75dcc6179bffcbde601", "612fa75dcc6179bffcbde600", "612fa75dcc6179bffcbde5ff", "612fa75dcc6179bffcbde5fe", "612fa75dcc6179bffcbde5fd", "612fa75dcc6179bffcbde5fc", "612fa75dcc6179bffcbde606", "612fa75dcc6179bffcbde602","612fa75dcc6179bffcbde603", "612fa75dcc6179bffcbde604", "612fa75dcc6179bffcbde605","612fa75dcc6179bffcbde5fb", "612fa75dcc6179bffcbde5fa", "612fa75dcc6179bffcbde5f9", "612fa75dcc6179bffcbde5f8", "612fa75dcc6179bffcbde5f7", "612fa75dcc6179bffcbde5f6"]
    }),
    new Category({
        image_url: 'https://i.pinimg.com/564x/a0/f8/59/a0f8599693c240ae3a198e3c88a27afa.jpg',
        name: 'Mesas',
        products:["612fa75dcc6179bffcbde5ed", "612fa75dcc6179bffcbde5ee", "612fa75dcc6179bffcbde5ef", "612fa75dcc6179bffcbde5f0", "612fa75dcc6179bffcbde5f1", "612fa75dcc6179bffcbde5f2", "612fa75dcc6179bffcbde5f3", "612fa75dcc6179bffcbde5f4", "612fa75dcc6179bffcbde5f5", "612fa75dcc6179bffcbde5f6"]
    }),
    new Category({
        image_url: 'https://i.pinimg.com/originals/58/85/20/588520c9a6731dfc295e28443b2a5f46.jpg',
        name: 'Sillas',
        products:["612fa75dcc6179bffcbde5e8", "612fa75dcc6179bffcbde5e9", "612fa75dcc6179bffcbde5ea", "612fa75dcc6179bffcbde5eb", "612fa75dcc6179bffcbde5ec"]
    }),
    new Category({
        image_url: 'https://desillas.com/img/Categoryos/EJKREB_32.jpg',
        name: 'Camas',
        products:["612fa75dcc6179bffcbde601", "612fa75dcc6179bffcbde600", "612fa75dcc6179bffcbde5ff", "612fa75dcc6179bffcbde5fe", "612fa75dcc6179bffcbde5fd", "612fa75dcc6179bffcbde5fc"]
    }),
    new Category({
        image_url: 'https://sillasgamerxpro.com.mx/wp-content/uploads/2021/02/sillas-de-madera.jpg',
        name: 'Velador',
        products:[]
    }),
    new Category({
        image_url: 'https://amoblartecomodoro.com/wp-content/uploads/2020/07/VIENNA-SILLA-MADERA-1.png',
        name: 'Sillones',
        products:[]
    }),
    new Category({
        image_url: 'https://i.pinimg.com/originals/58/85/20/588520c9a6731dfc295e28443b2a5f46.jpg',
        name: 'Repisas',
        products:[]
    }),
    new Category({
        image_url: 'https://i.pinimg.com/originals/58/85/20/588520c9a6731dfc295e28443b2a5f46.jpg',
        name: 'Racks',
        products:[]
    }),
    new Category({
        image_url: 'https://i.pinimg.com/originals/58/85/20/588520c9a6731dfc295e28443b2a5f46.jpg',
        name: 'Placards',
        products:["612fa75dcc6179bffcbde606", "612fa75dcc6179bffcbde602","612fa75dcc6179bffcbde603", "612fa75dcc6179bffcbde604", "612fa75dcc6179bffcbde605","612fa75dcc6179bffcbde5fb", "612fa75dcc6179bffcbde5fa", "612fa75dcc6179bffcbde5f9", "612fa75dcc6179bffcbde5f8", "612fa75dcc6179bffcbde5f7", "612fa75dcc6179bffcbde5f6"]
    })
];
var done = 0;
for(let i = 0; i < categories.length; i++) {
    categories[i].save(function(err, result){
        done++;
        if(done === categories.length) {
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}