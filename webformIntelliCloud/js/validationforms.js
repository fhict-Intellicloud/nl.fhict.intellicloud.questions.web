// JavaScript Document
$("#submitQuestion").click(function() {
	clearWarningBox();
	validateQuestion();
});

function clearWarningBox(){
	$('#warningBox').html("");
}

function validateQuestion(){
	//validate length of the question
	question = $("#question").val();
	title = $("#title").val();
	var minLengthTitle = 10;
	var minLengthQuestion = 30;
	var checksPassed = true;
	
	if(question.length < minLengthQuestion){
        $("#warningBox").html($("#warningBox").html() + "<div style='color: #ff0000;'>Your question should be at least " + minLengthQuestion + " characters long!</div> ");
		$("#question").css('border', 'solid 1px #f00');
        checksPassed = false;
    }

    //Check if title length is 15 characters minimum
    if(title.length < minLengthTitle){
       $("#warningBox").html($("#warningBox").html() + "<div style='color: #ff0000;'>Your title should be at least " + minLengthTitle + " characters long!</div> ");
	   $("#title").css('border', 'solid 1px #f00');
       checksPassed = false;
    }
		
	if(checksPassed != false){
		checkForAnswer();
	}
}

$("#submitEmail").click(function(e) {
	validateEmail();
});

function validateEmail(){
	//validate the structure of the emailaddress
	email = $("#email").val();
	var checksPassed = true;
	if(IsEmail(email)){		
		clearWarningBox();
		submitQuestion();
	}else{
		$("#warningBox").html("<div style='color: #ff0000;'>Not a valid email address!</div> ");
		$("#email").css('border', 'solid 1px #f00');
	checksPassed = false;
	}
}
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})$/;
    return regex.test(email);
}