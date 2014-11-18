$(document).ready(function() {

  var _;
  var friends, index, count, me;
  var $quiz_container = $("<div class='quiz_container'></div>");
  var $banner = $("<div class='banner'></div>");
  var $guess = $("#guess");
  var $whats_my_name = $("<div id='what'></div>");

  var renderFriend = function(){
    if(friends.length > 0){
      $quiz_container.html("<img src='https://graph.facebook.com/" + friends[0].id + "/picture?type=large', width='200', height='200'></img>");
    } else {
      $quiz_container.text("Hooray. You're done.");
    }
  };

  var guess = function(){
    if( $guess.val() === friends[0].name){
      //maybe wait a second, display success, then next
      friends.shift();
      renderFriend();
    } else {
      //handle failure
    }
  }

  $(".row").after().append($quiz_container);
  $(".quiz_container").append($banner);
  $whats_my_name.html("WHAT'S MY NAME?");
  $banner.append($whats_my_name).hide().fadeIn("4000");

  $("#guess").keyup(function(){
    guess();
  });

  $.ajax("/api/facebook").done(function(data){

    //Select a random set of 20 ids
    friends = _.shuffle(_.sample(data.friends, 20));
    me = data.me;
    console.log(friends);
    renderFriend();
    
   /* 
  	var count = 10,
  	var id_array = [];
    friends = data.friends;
    var $photo = $("<div id='photo'></div");
    
    while (count > 0) {
      // Load random photo
      index = Math.floor(Math.random() * friends.length)
      // Fill an array of id's?
      id = friends[index]["id"];
      id_array.push(id);
<<<<<<< HEAD
      
      // Add the photo
      $("#photo").html("<img src='user_photo[id]'>");    // what is the actual src that will work???

      // Add answer field
      

      $("#photo").empty()
    	count -= 1;
  	}
    // for (var i = 0; i < 10; i++) {
    // }



  //console.log(data);
=======
      // Or we could just load the photo here and have them guess
      user_photo[id]

      count -= 1;
  	console.log(friends[count]["id"]);
  	count -= 1;
  	}*/

  });
});
