// JavaScript Document
function checkForAnswer(){
//Check if there is a correct answer available
//else navigate to noAnswer.html to submit an email address
	
	//temp -> not yet implemented on server
	var data = false
	
	//$.ajax({
	//	type: 'POST',
	//	url: 'http://81.204.121.229/IntelliCloudService/QuestionService.svc/questions',
	//	data: '{"source":"Web", "reference":"' + sMail +'", "question":"' + sQuestion + '", "title":"' + sTitle + '"}', // or JSON.stringify ({name: 'jonas'}),
	//	success: function(data) {
			if(data) {
				$("#warningBox").html("<div style='color: #42e81c;'>"+ data +"</div> ");
				//$page = ;
				showScreen("showAnswer");
				//Answer found -> GOTO answer.html
			}
			else {
				//$page = ;
				showScreen("noAnswer");
				//No answers available -> GOTO noAnswer.html
			}
	//	},
	//	contentType: "application/json",
	//	dataType: 'json'
	//});
	
			
}
function submitQuestion(){
//The unanswered question is submitted to the database.
	$.ajax({
	    //crossDomain: true,
		type: "POST",
		url: 'http://81.204.121.229/intellicloudservice/QuestionService.svc/questions',
		contentType: "application/json",
		async: false,
		data: '{"source":"Mail", "reference":"' + email +'", "question":"' + question + '", "title":"' + title + '"}', 
		success: function(data) {
			//TODO show thank you message
			alert(data);
		},
	});
}