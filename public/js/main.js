$(document).ready(function() {

  var friends, index, count;

  var _;
  var friends, index, count;

  var $quiz_container = ("<div class='quiz_container'></div>");

  $.ajax("/api/facebook").done(function(data){

    //Select a random set of 20 ids

    friends = _.shuffle(_.sample(data, 20));

    console.log(friends);

  	$(".row").after().append($quiz_container);
  	var $banner = $("<div class='banner'></div>");
  	$(".quiz_container").append($banner);

  	var $whats_my_name = $("<div id='what'></div>");
  	$whats_my_name.html("WHAT'S MY NAME?");
		$banner.append($whats_my_name).hide().fadeIn("4000");
		// $(".banner").remove($whats_my_name); $whats_my_name.hide(); //.fadeOut(); $whats_my_name.html("").html("WHAT IS"); $(".banner").append($whats_my_name).fadeIn(); $whats_my_name.remove(); $whats_my_name.html("WHAT IS MY"); $(".banner").append($whats_my_name); $whats_my_name.remove(); $whats_my_name.html("WHAT IS MY NAME?"); $(".banner").append($whats_my_name); $whats_my_name.remove();

  	var count = 10,
    id;
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
  });
});
