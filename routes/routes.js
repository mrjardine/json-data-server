const vaccineRoutes = require('./vaccines');

const appRouter = (app, fs) => {
    // default route to handle empty routes at the base API url
    app.get('/', (req, res) => {
      res.send('welcome to the development api-server');
    });
  
    // run route module here to complete the wire up
    vaccineRoutes(app, fs);
  };

module.exports = appRouter;
