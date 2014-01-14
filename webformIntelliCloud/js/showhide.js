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
function showButton(){
	$("#noValidAnswerFoundButton").removeClass("hide");	
}