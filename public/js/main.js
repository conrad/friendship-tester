$(document).ready(function() {
  var friends, index, count, me;
  var $quiz_container = $("<div class='quiz_container'></div>");
  var $guess = $("#guess");

  var renderFriend = function(){
    if(friends.length > 0){
      $quiz_container.html("<img src='https://graph.facebook.com/" + friends[0].id + "/picture?type=large', width='120', height='120'></img>");
    } else {
      $quiz_container.text("Hooray. You're done.");
    }
  };

  var guess = function(){
    if( $guess.val() === friends[0].name){
      friends.shift();
      renderFriend();
    } else {
      //handle failure
    }
  }

  $(".row").after().append($quiz_container);

  $("#submit").click(function(){
    guess();

  });

  $.ajax("/api/facebook").done(function(data){

    //Select a random set of 20 ids
    friends = _.shuffle(_.sample(data.friends, 20));
    me = data.me;
    console.log(friends);
    renderFriend();
    
   /* 
  	var $banner = $("<div class='banner'></div>");
  	$(".quiz_container").append($banner);

  	var $whats_my_name = $("<div id='what'></div>");

  	$whats_my_name.html("WHAT'S MY NAME?");
		$banner.append($whats_my_name).hide().fadeIn("4000");

  	var count = 10,
  	var id_array = [];
    friends = data.friends;
    
    while (count > 0) {
      // Load random photo
      index = Math.floor(Math.random() * friends.length)
      // Fill an array of id's?
      id = friends[index]["id"];
      id_array.push(id);
      // Or we could just load the photo here and have them guess
      user_photo[id]

      count -= 1;
  	console.log(friends[count]["id"]);
  	count -= 1;
  	}*/

  });
});
