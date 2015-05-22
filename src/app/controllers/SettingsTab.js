$.pushNotificationSwitch.value = false;
//$.notificationSwitchBar.touchEnabled = false;

function pushNotificationStatusChanged(e) {
	var dialog = Ti.UI.createAlertDialog({
	    message: 'Push Notification Alerts: ' + (e.value ? 'On' : 'Off'),
	    title: 'Not Implemented',
	    ok: 'OK'
  	}).show()
}

function login(e) {
	var dialog = Ti.UI.createAlertDialog({
	    message: 'This is for demonstration purpose only!',
	    title: 'Not Implemented',
	    ok: 'OK'
  	}).show();
}

function signup(e) {
	var dialog = Ti.UI.createAlertDialog({
	    message: 'This is for demonstration purpose only!',
	    title: 'Not Implemented',
	    ok: 'OK'
  	}).show();
}