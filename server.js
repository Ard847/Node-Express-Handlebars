const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require("path")
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.resolve("./public/assets/img")));

// Import routes and give the server access to them.
const routes = require('./controllers/burgersController.js');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
