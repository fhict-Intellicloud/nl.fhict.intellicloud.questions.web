$(function(){
    $("#submitQuestion").click(function(e) {
        //Stop making Form submit
        e.preventDefault();

        //Create variables and set value
        var allChecksPassed = true;
        var sMail = $("#email").val();
        var sQuestion = $("#question").val();


        //Check if valid email has been inputted
        if(IsEmail(sMail)){
           $("#warningBox").html("");
        }else{
           $("#warningBox").html("<div style='color: #ff0000;'>Email is incorrect ingevuld</div> ");
            allChecksPassed = false;
        }

        //Check if question length is 15 characters minimum
        if(sQuestion.length < 15){
            $("#warningBox").html($("#warningBox").html() + "<div style='color: #ff0000;'>Uw vraag dient minimaal 15 karaters te zijn!</div> ");
            allChecksPassed = false;
        }

        //If all form input is valid, make post to Backend and reset input values.
        if(allChecksPassed){
            $("#email").val("info@example.com");
            $("#question").val("Type hier uw vraag...");
            $.post( "http://81.204.121.229/IntelliCloudService/QuestionService.svc/questions", { source: "Mail", reference: sMail, question: sQuestion })
                .done(function( data ) {
                    $("#warningBox").html("<div style='color: #42e81c;'>"+ data +"</div> ");
                });
        }
    });


    //Function: IsEmail, checks if string is a valid email address
    //Parameter: string(email)
    //Return: Boolean
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
});