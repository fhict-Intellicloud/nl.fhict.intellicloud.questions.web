// JavaScript Document
	$(function (){
		$("#submitQuestion").click(function() {
		clearWarningBox();
		validateQuestion();
	});
	$("#submitEmail").click(function(e) {
		validateEmail();
	});	
	$("#unUsefullBtn").click(function(e) {
		showScreen("feedbackAnswer");
	});
	$("#usefullBtn").click(function(e) {
		//function to send answer approval to db
	});
	$("#resendQuestion").click(function(e) {
		//function to send the feedback to the server with email
	});
	
})