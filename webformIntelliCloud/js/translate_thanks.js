// JavaScript Document
window.onload=function(){
//$(document).ready(function() {
	//alert ("in ajax");
    $.ajax({
        type: "GET",
		url: "js/translations/thanks.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
};

var taal = window.navigator.userLanguage || window.navigator.language;
taal = taal.toLowerCase();
var taalArray = taal.split("-")
taal = taalArray[0];

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
