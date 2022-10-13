const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    //displays index.html from dist folder upon build
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );