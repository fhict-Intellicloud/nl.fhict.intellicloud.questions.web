
var url = "http://81.204.121.229/IntelliCloudService/IntelliCloudService.svc/";

$(document).ready(
	function() 
	{
		loadQuestion();
		loadAnswer();
	}
);

//loading the question
function loadQuestion()
{
	var request = $.get(url + "GetQuestionById/1/", null, null, "json");
	
	request.done(function (response)
	{
		$("#questionfield").html(result.Content);
	});
	request.fail(function (response)
	{
		alert("Error loading question: " + response);
	});
}

//loading the answer
function loadAnswer()
{
	var request = $.get(url + "GetAnswerById/1/", null, null, "json");
	
	request.done(function (response)
	{
		$("#answerfield").html(result.Content);
	});
	request.fail(function (response)
	{
		alert("Error loading answer: " + response);
	});
}

//accepting a fuestion with feedback
function accept() 
{
	var request = $.post(url + "AcceptAnswer/", {feedback : feedback.value , answerId : "1", questionId : "1"}, null, "json");
	
	request.done(function (response)
	{
		var message = "accepted with feedback: " + feedback.value;
		alert(message);
	});
	request.fail(function (response)
	{
		alert("Error accepting answer");
	});
}

//declining a fuestion with feedback
function decline()
{
	var request = $.post(url + "DeclineAnswer/", {feedback : feedback.value , answerId : "1", questionId : "1"}, null, "json");
	
	request.done(function (response)
	{
		var message = "declined with feedback: " + feedback.value;
		alert(message); 
	});
	request.fail(function (response)
	{
		alert("Error declining answer");
	});
}