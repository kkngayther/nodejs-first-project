const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// methodOverride
app.use(methodOverride('_method'));

// XMLhttpsRequest, fetch, axios

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Home, Search, Contact

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});