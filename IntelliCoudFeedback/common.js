var url = "http://81.204.121.229/IntelliCloudService/IntelliCloudService.svc/";

/*
* This function is called when the page is loaded.
* 
* The loadQestion method is invoked 
*/
$(document).ready(function() 
{
	loadQuestionWithId($.urlParam('QuestionId'), $.urlParam('Token'));
});

/*
* In the browser the the feedback form wil be load like: ../index.html?Token="put token here"&QuestionId="put question id here"
* This function wil match the name parameter with href parameters ans wil return the input value.
*
* Example: browser url is "index.html?Token=3" $.urlParam('Token') wil return 3.            
*/
$.urlParam = function(name)
{
	
	var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
	return results[1] || 0;
}

/*
* This function loads data from the backend and fills the answerfield & questionfield 
* The accept & decline methods are bound to the buttons               
*/
function loadQuestionWithId(questionId, token)
{
	var request = $.get(url + "GetQuestionById/" + questionId, null, null, "json");
	
	request.done(function (response)
	{
		$("#answerfield").html(response.Answer.Content);
		$("#questionfield").html(response.Content);
		
		$("#btnAccept").click(function()
		{
			accept(response.Answer.Id, questionId, token);	
		});
		
		$("#btnDecline").click(function()
		{
			decline(response.Answer.Id, questionId, token);	
		});
	});
	request.fail(function (response)
	{
		alert("Error loading answer: " + response);
	});
}

/*
* This function accepts an answer and sends the feedback to the backend         
*/
function accept(answerId, questionId, token) 
{
	var request = $.post(url + "AcceptAnswer", {"feedback" : feedback.value , "answerId" : answerId, "questionId" : questionId, "token" : token}, null, "json");
	
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
function decline(answerId, questionId, token)
{
	var request = $.post(url + "DeclineAnswer", {"feedback" : feedback.value , "answerId" : answerId, "questionId" : questionId, "token" : token}, null, "json");
	
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