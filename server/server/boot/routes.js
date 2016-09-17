module.exports = function(app) {
	app.get('/', function(req, res){ 
		res.render('application');
	});
	app.get('/partials/:section/', function(req, res){
		res.render('partials/' + req.params.section);
	});

	app.get('/partials/:section/:name', function(req, res){
		res.render('partials/' + req.params.section +'/' + req.params.name);
	});
	app.get('/partials/:section/:subSection/:name', function(req, res){
		res.render('partials/' + req.params.section +'/'+ req.params.subSection +'/' + req.params.name);
	});
}