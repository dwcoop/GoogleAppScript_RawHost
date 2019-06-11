/*
 * AppScript RAW架設  
 * 張睿玹版權所有
 * https://github.com/dwcoop/GoogleAppScript_RawHost/license.html
 * 檔案: rawHost-1.0.0.php
 * 版本: V1.0.0
 * 日期: 2019-06-10T15:27Z
 */
function doGet(e) {
  var para=e.parameter,
  options = {
     "async": true,
     "crossDomain": true,
     "method" : "GET",
     "headers" : {
       
     }
   },
  url=para["url"],
  response = UrlFetchApp.fetch(url,options)
  response=response.getContentText();
  Logger.log(response);
  return ContentService.createTextOutput(response).setMimeType(ContentService.MimeType.JAVASCRIPT); 
}
