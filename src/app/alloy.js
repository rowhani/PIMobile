Alloy.Globals.defaultMargin = 10;
Alloy.Globals.defaultBorderWidth = 2;

Alloy.Globals.modelAdapter = OS_MOBILEWEB ? "localStorage" : "sql";
Ti.API.info("Model Adapter: " + Alloy.Globals.modelAdapter);

Alloy.Globals.goToDetails = function (e, domainName) {
	Ti.API.info("Domain Name: " + domainName);
	
	var detailsView = Alloy.createController('DomainDetailsView', {
		domainName: domainName
	}).getView();
		
	if(Alloy.Globals.currentSearchWindow) {
		Alloy.Globals.currentSearchWindow.close();
	}
	Alloy.Globals.currentSearchWindow = detailsView;
		
	Alloy.Globals.currentTabGroup._activeTab.open(detailsView, { animated: true, fullscreen: true });		
};