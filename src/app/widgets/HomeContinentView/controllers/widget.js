var args = arguments[0] || {};
$.ContinentName.text = args.ContinentName || 'Continent X',
$.UpSitesText.text = args.UpSitesText || 'XXX up';
$.DownSitesText.text = args.DownSitesText || 'XXX down';

if (OS_ANDROID) {
	$.ContinentView.width = Ti.UI.SIZE;
}
