var info;
// var userObject;


$("#finishSurvey").on("click", function(){
	info = $("#form").serializeArray();
	for(i=0; i < info.length; i++){
		console.log(info[i].value)
		if(info[i].value == ''){
			alert("It looks like you missed a field! Please enter a value for " + info[i].name);
			break;
		}else if(info[i].value == 'unanswered'){
			alert("It looks like you missed a question! Please answer Question " + info[i].name);
			// break;
		}else{
			createUser();
		}
	}

	return false;
})

function createUser(){
	console.log(info);
	var userObject = {
		name: info[0].value,
		age: info[1].value,
		gender: info[2].value,
		location: info[3].value,
		answers: [],
		score: 0,
	}
	for(i=4; i<info.length; i++){
		userObject.answers.push(info[i].value);
		userObject.score += parseInt(info[i].value);
	};
	// console.log("is this thing on?")
	console.log(userObject)

}



var currentURL = window.location.origin;
function distribute(){
	$.post(currentURL+'/api/friends', userObject, function(data){

	})
}
