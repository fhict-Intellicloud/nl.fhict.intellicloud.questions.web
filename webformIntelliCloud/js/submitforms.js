function submitQuestion(){
//The unanswered question is submitted to the database.
	$.ajax({
		type: "POST",
		url: 'http://81.204.121.229/intellicloudservicenew/QuestionService.svc/questions',
		contentType: "application/json",
		async: false,
		data: '{"source":"Mail", "reference":"' + email +'", "question":"' + question + '", "title":"' + title + '"}', 
		fail: function(){
			alert("Connection error, Please try again");	
		},
		success: function(data) {
			fancyhide();
			window.location.replace('thanks.html');
		},
	});
}