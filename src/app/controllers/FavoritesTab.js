if (!OS_ANDROID) {
	$.window.remove($.TopSearchBar.getView());
	$.window.titleControl = Alloy.createWidget("TopSearchBar", "widget").getView();
}

function goToDetails(e) {
	Alloy.Globals.goToDetails(e, e.rowData.domainName);
}

/// LOAD SAMPLE FAVORITES INTO COLLECION
var sampleFavorites = Alloy.createCollection('Favorite');
sampleFavorites.fetch();
if (!sampleFavorites.length) {
	utils = require('utils');
	var sampleWebsites = utils.readJsonFile('temp/SampleFavoriteWebsites.json').websites;
	for (var i = 0; i < sampleWebsites.length; i++) {
		Alloy.createModel('Favorite', sampleWebsites[i]).save();
	};
}

// FETCH SAMPLE FAVORITES FROM COLLECTION
Alloy.Collections.Favorite.fetch();