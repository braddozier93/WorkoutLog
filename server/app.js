require('dotenv').config();

const express = require('express');
const app = express();

const logs = require('./controllers/logcontroller');
const users = require('./controllers/usercontroller');

const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

app.listen(process.env.PORT, function(){
    console.log(`App is listening on ${process.env.PORT}!`)
});

app.use('/user', users);
app.use(require('./middleware/validate-session'));
app.use('/log', logs);


app.use('/api/test', function(req, res){
    res.send("This is test data from the /api/test endpoint. It's from the server!");
});
