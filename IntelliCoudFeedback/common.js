
var url = "http://81.204.121.229/IntelliCloudService/IntelliCloudService.svc/";

/*
* This function is called when the page is loaded.
* 
* The question & answer is loaded into the right fields
* The accept & decline methods are bound to the buttons       
*/
$(document).ready(function() 
{
	var id = $.urlParam('AnswerId');

	loadAnswerWithId(id);

	$("#btnDecline").click(function()
	{
		decline(id);	
	});

	$("#btnAccept").click(function()
	{
		accept(id);	
	});
});

/*
* This function extracts the paramaters from the url            
*/
$.urlParam = function(name)
{
	var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
	return results[1] || 0;
}

/*
* This function loads data from the backend and fils the answerfield & questionfield          
*/
function loadAnswerWithId(id)
{
	var request = $.get(url + "GetAnswerById/" + id, null, null, "json");
	
	request.done(function (response)
	{
		$("#answerfield").html(response.Content);
		$("#questionfield").html(response.Question);
	});
	request.fail(function (response)
	{
		alert("Error loading answer: " + response);
	});
}

/*
* This function accepts an answer and sends the feedback to the backend         
*/
function accept(id) 
{
	var request = $.post(url + "AcceptAnswer", {feedback : feedback.value , answerId : id, questionId : "-1"}, null, "json");
	
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

/*
* This function declines an answer and sends the feedback to the backend         
*/
function decline(id)
{
	var request = $.post(url + "DeclineAnswer", {feedback : feedback.value , answerId : id, questionId : "-1"}, null, "json");
	
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