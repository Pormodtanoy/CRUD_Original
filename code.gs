function doGet(e){
  return HtmlService
    .createTemplateFromFile('index.html')
    .evaluate()
    .setTitle("Crud Example");
}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
};

var ss = SpreadsheetApp.openById("1MKvV_1aJPXMKGXTu71MJQ8VzzxzWCbz3HFsldrFtaGk");
var sheet = ss.getSheetByName("ชีต1");


//newEntry function 
function newEntry(sd){
  var zeroPad = (num, places) => String(num).padStart(places, '0')
  var rnd =Math.floor(Math.random() * 500) + 500;
  var id = "E"+zeroPad(rnd,6); //unique id for each entry
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var vid = sheet.getRange(i, 3).getValue();
      if(vid == sd[1]){// checking if Email already exist.
      flag = 0;   
  var  data  ="This email is already in our data base.";
      return data;
    }
   }
     if(flag==1){
  sheet.appendRow([id,sd[0],sd[1],sd[2],sd[3],sd[4]]);
  sheet.getRange(i, 5).setNumberFormat('@STRING@');
  var data = 'Entry successfully made with entry Id:'+id;
  return data;
    } 
    };
