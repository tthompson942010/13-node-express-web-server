var friendsData = require("../data/friends.js");

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		var newfriend = req.body;
		friendsData.push(req.body);
		console.log(newfriend);
		var bestmatch = {
			name: "",
			location: "",
			matchDiff: 1000
		};
		for (i=0; i < friendsData.length - 1; i++){
			var answerDiff = [];
			var totalDiff = 0;
			for (j=0; j < friendsData[i].answers.length; j++){
				var recordscore = friendsData[i].answers[j];
				var newscore = req.body.answers[j];
				answerDiff.push(Math.abs(parseInt(recordscore)-parseInt(newscore)));
			};
			for (k=0; k < answerDiff.length;k++){
				totalDiff += answerDiff[k];
			}
			if(totalDiff < bestmatch.matchDiff){
				bestmatch = {
					name: friendsData[i].name,
					location: friendsData[i].location,
					matchDiff: totalDiff
				};
			};

		};
		console.log(bestmatch);
		console.log(friendsData);
		res.json(bestmatch);
	});
};