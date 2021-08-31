const express = require('express');
const morgan = require('morgan');
const server = express();
const mongoose = require('mongoose');
const PORT = 3001;
const routes = require('./routes/index');

mongoose.connect('mongodb://localhost/requests')
.then(db => {
    console.log('DB connected');
})
.catch(err => {
    console.log(err);
});
// dropea la collection igual q el {force: true}, pero aun no se donde iria XD.
// mongoose.connection.db.dropCollection('products', function(err, results) {
//     if(err) console.log(err);
//     else console.log(results);
// });

server.use(morgan('dev'));
server.use(express.urlencoded());
server.use(express.json())

server.use('/', routes);

server.listen(PORT, () => {
    console.log('server listening on port: ', PORT);
});
