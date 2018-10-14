const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
let bodyParser = require('body-parser');
const exphbs = require("express-handlebars");

// Serve static content for the app from the "public" directory in the application directory.
// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
// Set Handlebars as the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
