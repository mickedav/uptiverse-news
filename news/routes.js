var App = require("./../core/core");
var news = require("./news-service")	;

var baseUrl = "/news"
module.exports = function() {

	App.Express.get( baseUrl, function (req, res) {
			news.getnews()
			.then(function(response) {
				res.send(response);
			});
	});

	App.Express.post( baseUrl + "/create", function (req, res) {
			news.create(req.body.news)
			.then(function(response) {
				res.send(response);
			});
	});

};
