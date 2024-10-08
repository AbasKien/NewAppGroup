const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const routes = require('./routes/router.js');
const session = require('express-session');


// Set up the view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Routes should be defined after session middleware
app.use("/", routes);

app.listen(3233, () => {
    console.log('Server running on http://localhost:3233');
});
