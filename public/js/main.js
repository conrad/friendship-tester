$(document).ready(function() {

  var friends;

  $.ajax("/api/facebook").done(function(data){
    console.log(data);
    friends = data.friends;
    $('#content').html(JSON.stringify(friends));
  });



});
