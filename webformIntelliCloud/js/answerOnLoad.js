window.onload=function(){
    $.ajax({
        type: "GET",
        url: "js/translations/answers.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
	 
	 getQuestion();
};