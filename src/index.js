const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3030;

const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

// Serve static file in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Express's middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})