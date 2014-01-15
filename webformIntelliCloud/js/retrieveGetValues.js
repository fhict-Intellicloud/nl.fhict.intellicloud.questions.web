function getURLValues() {
	var countI=0;
	var url = document.URL; 
	var splitUrl = url.split("?"); 
	var getValues = splitUrl[1]; 
	var splitValues = getValues.split("&");

	while(splitValues[countI]){
		var get = splitValues[countI];
		var splitGet = get.split("=");
		var getStringName = splitGet[0];
		var getStringValue = splitGet[1];
		if(getStringName == "ft"){
			feedbackToken = getStringValue;
			break;
		}
		countI++;
	}
}