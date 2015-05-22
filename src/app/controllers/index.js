$.index.open();

Alloy.Globals.currentTabGroup = $.index;
Titanium.UI.currentTabGroup = $.index;
Titanium.UI.currentTab = $.HomeTab;
Alloy.Globals.currentTabGroup._activeTab = $.HomeTab;

function tabGroupFocus(e) {
	if(!e.index) return;
	
    $.index._activeTab = e.tab;
    $.index._activeTabIndex = e.index;
    if ($.index._activeTabIndex == -1) return;
    Ti.API.info("Active Tab Index: " + $.index._activeTabIndex);
    Ti.API.info("Active Tab Title: " + $.index._activeTab.title);
 
    // create property in Ti namespace
    Ti.API._activeTab = $.index._activeTab;
    Ti.API.info("Active Tab Title [Ti.API._activeTab]:" + Ti.API._activeTab.title);
};

function tabGroupClose(e) {
    $.destroy();
};