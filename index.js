if ( process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express();
const PORT = process.env.PORT
const routes = require('./routes');
const cors = require('cors');
const { urlencoded } = require('express');

app.use(cors());

app.use(express.json());
app.use(urlencoded({extended:false}));

app.use(routes)

require('./database/mongooseConnection');

app.listen(PORT, ()=>console.log(`The server is LISTENING....`))