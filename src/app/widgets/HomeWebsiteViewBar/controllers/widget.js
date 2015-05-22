var args = arguments[0] || {};
$.WebsiteIcon.image = args.WebsiteIcon || WPATH('/NoIcon.png'); 
$.WebsiteName.text = args.WebsiteName || 'TestWebsite.com';
$.WebsiteStatusDescription.text = args.WebsiteStatusDescription || 'Status Description';
$.WebsiteStatusIcon.image = (args.WebsiteStatus || 'true') == 'true' ? WPATH('/UpIcon.png') : WPATH('/DownIcon.png');

if (OS_ANDROID) {
	$.LeftPanel.width = "88%";
}
