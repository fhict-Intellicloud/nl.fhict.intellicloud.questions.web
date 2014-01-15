var KEYS = {
	SPACE: 32,
	NL: 10,
	CR: 13,
	dot: 190,
	questionmark: 191,
	exclamationmark: 49,
	comma: 188
};

function getSimilarQuestion(){
	//get value from strings from page
	question = document.getElementById('question').value;
	
	//show not my answer button
	showButton();
					
	var e = event;
	var key = e.which || e.keyCode;
	if(key === KEYS.SPACE || key === KEYS.NL || key === KEYS.CR || key === KEYS.dot || key === KEYS.questionmark || key === KEYS.exclamationmark || key === KEYS.comma) {	
		//send values to server
		$.ajax({
			cache: false,
			type: "GET",
			url: 'http://81.204.121.229/intellicloudservicenew/AnswerService.svc/answers?state=1&search=' + question.trim(),
			contentType: "application/json",
			success: function(data) {
				var JSONData = JSON.stringify(data);
				var parsedData = JSON.parse(JSONData);
				var buildAnswerBox = "";
				
				for (var JSONCounter=0; JSONCounter < parsedData.length; JSONCounter++)
				{
					var answer = parsedData[JSONCounter]["Content"];
					var keywords = parsedData[JSONCounter]["Keywords"];

					buildAnswerBox += "<h3>Antwoord: "+(JSONCounter+1) +"</h3><div><p>" + answer +"</p></div>";
				}
				
				$("#accordion").html(buildAnswerBox);
				
				if(checkIfExists ==0){
					if(buildAnswerBox != ""){
					$(function() {
						$( "#accordion" ).accordion();
					});
					checkIfExists = 1;
					}
				}else{
					$(function() {
						$( "#accordion" ).accordion("refresh");
					});
				}
			}
		});
	}
}