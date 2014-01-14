function getQuestion(){
//The unanswered question is submitted to the database.
	fancyshow();
	getURLValues();
	//feedbackToken = '1dc03a33-045e-4297-863e-a9d674c2def5';
	
	console.log(feedbackToken);
	$.ajax({
	    //crossDomain: true,
		cache: false,
		type: "GET",
		url: 'http://81.204.121.229/intellicloudservicenew/QuestionService.svc/questions/token/' + feedbackToken,
		contentType: "application/json",
		async: false,
		success: function(data) {
			var JSONData = JSON.stringify(data);
			var parsedData = jQuery.parseJSON(JSONData);
			question = parsedData["Content"];
			var id = parsedData["Id"];
			var answerURL = parsedData["Answer"];
			questionId = id.replace("QuestionService.svc\/questions\/", "");
			console.log(questionId);
			
			//Get the answer
			$.ajax({
				cache: false,
				type: "GET",
				url: "http://81.204.121.229/IntelliCloudServicenew/"+answerURL,					
				contentType: "application/json",
				async: false,
				success: function(answerdata) {
					var answerJSONData = JSON.stringify(answerdata);
					var parsedAnswerData = JSON.parse(answerJSONData);
					
					var id = parsedAnswerData["Id"];
					answerId = id.replace("AnswerService.svc\/answers\/", "");
					console.log(answerId);
					
					answer = parsedAnswerData["Content"];
					console.log(answer);
					
					var answerTextbox = document.getElementById("answer");
					answerTextbox.value = answer;
				},
				error: function(answerdata) {
					var answerTextbox = document.getElementById("answer");
					answerTextbox.value = "Something went wrong, please try again later!"
				}
			});	
			
			var questionTextbox = document.getElementById("question");
			questionTextbox.value = question;
		},
		error: function(data){
			var answerTextbox = document.getElementById("answer");
			answerTextbox.value = "Something went wrong, please try again later!"
		},
		complete: function(){
			fancyhide();
		},
	});
}