/*
 * AppScript Host File
 * Version: V1.0.1
 * License: GPLv3
 */
function doGet(e) {
	var para = e.parameter,
		options = {
			"async": true,
			"crossDomain": true,
			"method": "GET",
			"headers": {
				"X-Powered-By":"Google App Script UrlFetchApp",
				"X-AppScript-Project":"GoogleAppScript_RawHost"
			}
		},
		url = para["url"],
		response = UrlFetchApp.fetch(url, options)
	response = response.getContentText();
	Logger.log(response);
	return ContentService.createTextOutput(response).setMimeType(ContentService.MimeType.JAVASCRIPT);
}
