$(function (){
		/*$("#submitQuestion").click(function() {
		clearWarningBox();
		validateQuestion();
	});*/
	$("#submitEmail").click(function(e) {
		clearWarningBox();
		validateQuestion();
	});	
	$("#unhelpfulBtn").click(function(e) {
		showScreen("feedbackAnswer");
	});
	$("#helpfulAnswer").click(function(e) {
		sendFeedback(0);
	});
	$("#resendQuestion").click(function(e) {
		//function to send the feedback to the server with email
	});
	$("#noValidAnswerFoundButton").click(function(e) {
		var questionsubmit = document.getElementById("questionsubmit");
		questionsubmit.value = question;
		showScreen("noAnswer");
	});	
	$("sendFeedback").click(function(e) {
		sendFeedback(1);
	});
})