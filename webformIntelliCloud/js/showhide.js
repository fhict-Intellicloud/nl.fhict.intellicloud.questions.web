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
	switch (page){
		case "askQuestion":	
			$("#askQuestion").removeClass("hide");
			$("#askQuestion").addClass("show");
			$("#noAnswer").removeClass("show");
			$("#noAnswer").addClass("hide");
			$("#showAnswer").removeClass("show");
			$("#showAnswer").addClass("hide");
		break;
	
		case "noAnswer":
			$("#askQuestion").removeClass("show");
			$("#askQuestion").addClass("hide");
			$("#noAnswer").removeClass("hide");
			$("#noAnswer").addClass("show");
			$("#showAnswer").removeClass("show");
			$("#showAnswer").addClass("hide");
		break;
		
		case "showAnswer":
			$("#askQuestion").removeClass("show");
			$("#askQuestion").addClass("hide");
			$("#noAnswer").removeClass("show");
			$("#noAnswer").addClass("hide");
			$("#showAnswer").removeClass("hide");
			$("#showAnswer").addClass("show");
		break;
		
		default:
			alert("Page not found");
		break;
    }
}