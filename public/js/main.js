$(document).ready(function() {

  var friends, index, count, me, success_image;
  var $quiz_container = $("<div class='quiz_container' margin='90px' padding='50px'></div>");
  // $quiz_container.css({"margin":"30px", "padding": "30px"})
  var $banner = $("<div class='banner'></div>");
  var $guess = $("#guess");
  var $content = $("#content");
  var $whats_my_name = $("<div id='what'></div>");
  $whats_my_name.html("WHAT'S MY NAME?");

  // var $success = $("<div id='success'></div>");
  // var $success_image = $("<img width='400', height='400' />")
  // var success_array = ["../img/success-1", "../img/success-2", "../img/success-3", "../img/success-4", "../img/success-5", "../img/success-6"];
  var $success = $("<div id='success'><img src='../img/success-3.png', width='400', height='400' /></div>");

  $not_success = $("<div class='fail'></div>");
  $not_success.text("Hmmmmm, that's not quite it yet...");

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
      // index = Math.floor(Math.random() * success_array.length);
      // $success_image.attr("src", success_array[index].val());
      $(".quiz_container").prepend($success);
      $success.on("click", function() {
        $("#success").remove();
        friends.shift();  
        renderFriend();
      });
      

    } else {
      // Things go crazy whenever I put anythig
      //handle failure
      // if ($guess.length > 8) {
        // $(".quiz_container").prepend($not_success);
      // } //else if ($guess.)
      // }
    }
  };

  $(".row").after().append($quiz_container);
  $(".quiz_container").prepend($banner);
  $banner.prepend($whats_my_name); //.hide().fadeIn("6000");

  $("#guess").keyup(function(){
    guess();
  });

  $.ajax("/api/facebook").done(function(data){
    $content.fadeIn(300);
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
