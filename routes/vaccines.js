const vaccineRoutes = (app, fs) => {
    // variables
    const dataPath = './data/vaccineapi.json';
  
    // READ
    app.get('/api/vaccineAPI1', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = vaccineRoutes;
