if (OS_ANDROID) {
	$.topSearchTextField.font = {
    	fontSize: '10dp'
   	};
}

var first = true;
function topSearchTextFieldFocus(e) {
    if (first && OS_ANDROID) {
        first = false;
        e.source.blur();
    }
}

function goToDetails(e) {
	Alloy.Globals.goToDetails(e, $.topSearchTextField.value);		
}