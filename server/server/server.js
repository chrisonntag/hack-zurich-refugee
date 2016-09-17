var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var sass = require('node-sass')
var fs = require('fs');

var app = module.exports = loopback();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

// Function to start web server
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

app.set('views', path.join(__dirname, '..', 'client/public/views'));
app.set('view engine', 'jade');

sass.render({
  file:  __dirname + '/../client/sass/css/styles.scss',
  outFile: __dirname + '/../client/css/styles.css',
  outputStyle: 'compressed'
}, function(err, result) {
    if(!err){
      fs.writeFile(__dirname + '/../client/css/styles.css', result.css, function(err){
          console.log("writting sass...");
        if(!err){
          console.log("sass done");
        } else {
        	console.log(err);
        }
      });
    } else {
    	console.log(err);
    }
});

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
