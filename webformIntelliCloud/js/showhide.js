//new
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
/*if(getUrlVars()["feedbacktoken"] != "" ||getUrlVars()["feedbacktoken"] != NULL || !getUrlVars()["feedbacktoken"]){
	showScreen("showAnswer");
}else{
	showScreen("askQuestion");	
}*/

function showScreen(page){
	//hide all pages
	$("#askQuestion").removeClass("show").addClass("hide");
	$("#noAnswer").removeClass("show").addClass("hide");
	$("#showAnswer").removeClass("show").addClass("hide");
	$("#feedbackAnswer").removeClass("show").addClass("hide");
	
	//show specific page
	switch (page){
		case "askQuestion":	
			$("#askQuestion").removeClass("hide").addClass("show");
		break;
	
		case "noAnswer":
			$("#noAnswer").removeClass("hide").addClass("show");
		break;
		
		case "showAnswer":
			$("#showAnswer").removeClass("hide").addClass("show");
		break;
		
		case "feedbackAnswer":
			$("#showAnswer").removeClass("hide").addClass("show");
			$("#feedbackAnswer").removeClass("hide").addClass("show");
		break;
		
		default:
			alert("Page not found");
		break;
    }
}