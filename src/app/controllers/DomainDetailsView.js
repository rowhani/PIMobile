if (!OS_ANDROID) {
	$.window.remove($.TopSearchBar.getView());
	$.window.titleControl = Alloy.createWidget("TopSearchBar", "widget").getView();
}

function changeFavoriteStatus(e) {
	if ($.favoriteButton.image == "/images/FavoritesInactive.png") {
		$.favoriteButton.image = "/images/FavoritesActive.png";
	}
	else {
		$.favoriteButton.image = "/images/FavoritesInactive.png";
	}
	
	var dialog = Ti.UI.createAlertDialog({
	    message: 'This is for demonstration purpose only!',
	    title: 'Not Implemented',
	    ok: 'OK'
  	}).show();
}

/// LOAD SAMPLE DATA

var args = arguments[0] || {};
var domainName = args.domainName || null;

var sampleData = {
	"yahoo.com": {
		"Visibility Index": 70,
		"Some other data": "...",
		"optedOut": false
	},
	"google.com": {
		"Visibility Index": 90,
		"Some other data": "...",
		"optedOut": true
	},
	"msn.com": {
		"Visibility Index": 50,
		"Some other data": "...",
		"optedOut": false
	},
	"facebook.com": {
		"Visibility Index": 98,
		"Some other data": "...",
		"optedOut": true
	}
};

var domain = sampleData[domainName];

$.domainName.text = domainName;
$.favoriteButton.visible = false;
if(domain) {
	if (!domain.optedOut)
	{
		$.favoriteButton.visible = true;		
		for (var data in domain) {
			if(data != "optedOut") {
				$.detailsView.add(Ti.UI.createLabel({
					text: data + " : " + domain[data]
				}));
			}
		}
	}
	else {
		$.detailsView.add(Ti.UI.createLabel({
			text: "Unfortunately, the site owners don't allow us to present statics. Please try searching for another site."
		}));
	}
}
else {
	$.detailsView.add(Ti.UI.createLabel({
		text: "We are not currently monitoting " + domainName + ", but we have added it to our system.\n\nCheck back in about 15 minutes and we'll have initial data on this site."
	}));
}

if (OS_ANDROID) {
	$.domainName.width = "85%";
	$.titleBar.layout = "horizontal";
	$.titleBar.horizontalWrap = false;
}

