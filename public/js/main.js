$(document).ready(function() {

  var friends, index, count, me, success_image;
  var $quiz_container = $("<div class='quiz_container'></div>");
  var $banner = $("<div class='banner'></div>");
  var $guess = $("#guess");
  var $whats_my_name = $("<div id='what'></div>");
  // var $success = $("<div id='success'><img src='../img/success-1.png'></div>");
  // ?var $success_image = $("<img>")
  // $success.attr("src", "/img/success-1")
  // var success_array = ["/img/success-1", "/img/success-2", "../img/success-3", "/img/success-4", "/img/success-5", "/img/success-6"];
  $not_success = $("<div class='fail'></div>");
  $not_success.text("That's not quite it")

  var renderFriend = function(){
    if(friends.length > 0){
      $quiz_container.html("<img src='https://graph.facebook.com/" + friends[0].id + "/picture?type=large', width='300', height='auto'></img>");
    } else {
      $quiz_container.text("Hooray. You're done.");
    }
  };

  var guess = function(){
    if( $guess.val() === friends[0].name){
      //maybe wait a second, display success, then next
      $(".quiz_container").prepend("<img src='../img/success-1.png', width='400', height='400' />");
      console.log($success);

      _.delay(friends.shift(), 5000);
      renderFriend();
    } else {
      //handle failure


    }
  }

  $(".row").after().append($quiz_container);
  $(".quiz_container").prepend($banner);
  $whats_my_name.html("WHAT'S MY NAME?");
  $banner.prepend($whats_my_name); //.hide().fadeIn("6000");

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
