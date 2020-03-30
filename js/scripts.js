$(document).ready(function(){
  $("#formOne").submit(function(params){
    event.preventDefault();
    var favThings = [$("input#fav1").val(), $("input#fav2").val(), $("input#fav3").val(), $("input#fav4").val()];
    var secondArray = [];
    secondArray.push(favThings[0], favThings[1], favThings[2]);      
    $("#output1").text(secondArray[0]);
    $("#output2").text(secondArray[1]);
    $("#output3").text(secondArray[2]);
  })

  $("#formTwo").submit(function(params){
    
  })
})