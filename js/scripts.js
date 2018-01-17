$(document).ready(function(){
  var street = [];
  var sName = ["burnside", "coach", "davis","everette"];
  var sNumber = ["1st", "2nd", "3rd", "4th"];
  sName.forEach(function(sName){
    sNumber.forEach(function(sNumber){
      var street = (sNumber + " and " + sName);
      $("#addy").append("<li>"+street+"</li>");
    });
  });
});
