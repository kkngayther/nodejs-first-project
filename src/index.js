const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// XMLhttpsRequest, fetch, axios

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Home, Search, Contact

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});