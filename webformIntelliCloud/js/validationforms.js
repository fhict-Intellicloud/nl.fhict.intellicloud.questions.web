function clearWarningBox(){
	$('#warningBox').html("");
}

function validateQuestion(){
	//validate length of the question
	question = $("#questionsubmit").val();
	title = $("#title").val();
	email = $("#email").val();
	
	var minLengthTitle = 10;
	var minLengthQuestion = 30;
	var checksPassed = true;
	
	if(question.length < minLengthQuestion){
        $("#warningBox").html($("#warningBox").html() + "<div style='color: #ff0000;'>Your question should be at least " + minLengthQuestion + " characters long!</div> ");
		$("#questionsubmit").css('border', 'solid 1px #f00');
        checksPassed = false;
    }

    //Check if title length is 10 characters minimum
    if(title.length < minLengthTitle){
       $("#warningBox").html($("#warningBox").html() + "<div style='color: #ff0000;'>Your title should be at least " + minLengthTitle + " characters long!</div> ");
	   $("#title").css('border', 'solid 1px #f00');
       checksPassed = false;
    }
	
	if(!IsEmail(email)){
		$("#warningBox").html($("#warningBox").html() + "<div style='color: #ff0000;'>Not a valid email address!</div> ");
		$("#email").css('border', 'solid 1px #f00');
		checksPassed = false;
	}
		
	if(checksPassed){
		fancyshow();
		submitQuestion();
	}
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})$/;
    return regex.test(email);
}