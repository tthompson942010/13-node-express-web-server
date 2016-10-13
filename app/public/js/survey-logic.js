$(document).ready(function(){
	var info;
	var currentURL = window.location.origin;

	var surveyCheck = function(form){
		for (i=0; i < form.length; i++){
			var input = form[i].value;
			console.log(input);
			var completed = true;
			if(input == ''){
				alert("It looks like you missed a field! Please enter a value for " + form[i].name);
				completed = false;
				return;
			}else if(input == 'unanswered'){
				completed = false;
				alert("It looks like you missed a question! Please answer Question " + form[i].name);
				return;
			}
		}
		if(completed == true){
		createUser();
		};
	};

	var createUser = function(){
		var userObject = {
			name: info[0].value,
			age: info[1].value,
			gender: info[2].value,
			location: info[3].value,
			answers: [],
		}
		for(i=4; i<info.length; i++){
			userObject.answers.push(info[i].value);
		};
		$.post(currentURL + '/api/friends', userObject, function(data){
			$('.modal-body').append(data.name).append('</n>').append(data.matchDiff);
			$("#yourMatch").modal('toggle');
		})

	};

	$("#finishSurvey").on("click", function(){
		info = $("#form").serializeArray();
		console.log("yo");
		surveyCheck(info);
		return false;
	});

});