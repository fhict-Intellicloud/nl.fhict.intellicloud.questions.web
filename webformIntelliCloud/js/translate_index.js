// JavaScript Document
window.onload=function(){
//$(document).ready(function() {
	//alert ("in ajax");
	
    $.ajax({
        type: "GET",
        url: "js/translations/index.csv",
        dataType: "text",
        success: function(data) {alert('test'); processData(data);}
     });
};

var taal = window.navigator.userLanguage || window.navigator.language;
taal = taal.toLowerCase();
var taalArray = taal.split("-")
taal = taalArray[0];

switch (taal)
{
	case "nl":
  		var questionPart1 = "Uw vraag moet tenminste ";
  		var questionPart2 = " tekens lang zijn!";
  		var titlePart1 = "Uw titel moet tenminste ";
  		var titlePart2 = " tekens lang zijn!";
  		var noValidEmail = "Het is geen geldig email adres!";
		var answerTextTitle = "Antwoord";
  	break;
case "en":
  		var questionPart1 = "Your question should be at least ";
  		var questionPart2 = " characters long!";
  		var titlePart1 = "Your title should be at least ";
  		var tiltePart2 = " characters long!";
  		var noValidEmail = "Not a valid email address!";
		var answerTextTitle = "Answer";
  	break;
  
default:
  		var questionPart1 = "Your question should be at least ";
  		var questionPart2 = " characters long!";
  		var titlePart1 = "Your title should be at least ";
  		var tiltePart2 = " characters long!";
  		var noValidEmail = "Not a valid email address!";
		var answerTextTitle = "Answer";
	break;
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
	var naam = "";

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');		
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
				if(headers[j] == "Naam"){
					naam = data[j];
					
				}else{
					window[naam + "_" + headers[j]] = data[j];
					//console.log(taal + headers[j] + " ID: " + naam)
					if(taal==headers[j]){
						document.getElementById(naam).innerHTML = data[j];
					 	
					}
				}   
            }
        }
    }
}
