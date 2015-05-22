if (!OS_ANDROID) {
	$.window.remove($.TopSearchBar.getView());
	$.window.titleControl = Alloy.createWidget("TopSearchBar", "widget").getView();
}

function goToDetails(e) {
	Alloy.Globals.goToDetails(e, e.rowData.domainName);
}

/// LOAD SAMPLE HOME WEBSITES INTO COLLECION
var sampleDomains = Alloy.createCollection('Domain');
sampleDomains.fetch();
if (!sampleDomains.length) {
	utils = require('utils');
	var sampleWebsites = utils.readJsonFile('temp/SampleHomeWebsites.json').websites;
	for (var i = 0; i < sampleWebsites.length; i++) {
		Alloy.createModel('Domain', sampleWebsites[i]).save();
	};
}

// FETCH SAMPLE HOME WEBSITES FROM COLLECTION
var sampleDomains = Alloy.createCollection('Domain');
sampleDomains.fetch();
sampleDomains.map(function(domain) {
	var tr = Ti.UI.createTableViewRow({height: 70, hasChild: false, domainName: domain.get('WebsiteName')});
	$.websitesTable.appendRow(tr);
	var websiteWidget = Alloy.createWidget("HomeWebsiteViewBar", "widget", domain.attributes).getView();
	tr.add(websiteWidget);
});

/// LOAD SAMPLE CONTINENTS
var sampleContinents = [
	{
		ContinentName: "North America",
		UpSitesText: "1.25M up",
		DownSitesText: "300k down"
	},
	{
		ContinentName: "Europe",
		UpSitesText: "1.25M up",
		DownSitesText: "300k down"
	},
	{
		ContinentName: "Asia",
		UpSitesText: "1.25M up",
		DownSitesText: "300k down"
	},
];

var width = 0;
if (sampleContinents.length) {
	width = 100 / sampleContinents.length;
}

for (var i = 0; i < sampleContinents.length; i++) {
	var continetWidget = Alloy.createWidget("HomeContinentView", "widget", sampleContinents[i]).getView();
	if (OS_ANDROID) {
		if (i != sampleContinents.length - 1) {
			continetWidget.width = width + "%";
		}
		else if (sampleContinents.length > 1) {
			continetWidget.width = (width - 4) + "%";
		}		
	}
	$.continentView.add(continetWidget);
};



