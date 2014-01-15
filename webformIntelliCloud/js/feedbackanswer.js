function sendFeedback(feedbackType) {
		if(feedbackType === 1){
			feedback = $("sendFeedback").val();
		}
		console.log(feedback);
		$.ajax({
			//crossDomain: true,
			type: "POST",
			url: 'http://81.204.121.229/intellicloudservicenew/FeedbackService.svc/feedbacks',
			contentType: "application/json",
			async: false,
			data: '{"feedback":"' + feedback + '", "answerId":"' + answerId +'", "questionId":"' + questionId + '", "feedbackType":"' + feedbackType + '", "feedbackToken":"' + feedbackToken+ '"}', 
			success: function(data) {
				//TODO show thank you message
				alert(data);
		},
	});
}