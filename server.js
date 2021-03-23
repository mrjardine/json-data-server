// load up the express framework
const express = require('express');

// create an instance of express to serve end points
const app = express();

// load up node's built in file system helper library, to be used later to serve JSON file(s)
const fs = require('fs');

// configure express instance, including handling JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handle routes
const routes = require('./routes/routes.js')(app, fs);

// launch server on port 3031.
const server = app.listen(3031, () => {
  console.log('listening on port %s...', server.address().port);
});
