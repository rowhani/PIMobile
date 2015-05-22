exports.readJsonFile = function (path) {
	return JSON.parse(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, path).read().text); 
}
