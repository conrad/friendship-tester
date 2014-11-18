$(document).ready(function() {

  var friends, index, count;
  var $quiz_container = ("<div class='quiz_container'></div>");

  $.ajax("/api/facebook").done(function(data){
  	
  	$(".row").after().append($quiz_container);
  	var $banner = $("<div class='banner'></div>");
  	$(".quiz_container").append($banner);

  	var $whats_my_name = $("<div id='what'></div>");
  	$whats_my_name.html("WHAT IS MY NAME?");
		$banner.append($whats_my_name).hide().fadeIn("4000");
		// $(".banner").remove($whats_my_name);
		//$whats_my_name.hide(); //.fadeOut();
		// $whats_my_name.html("").html("WHAT IS");
		// $(".banner").append($whats_my_name).fadeIn();
		// $whats_my_name.remove();

		// $whats_my_name.html("WHAT IS MY");
		// $(".banner").append($whats_my_name);
		// $whats_my_name.remove();
		// $whats_my_name.html("WHAT IS MY NAME?");
		// $(".banner").append($whats_my_name);
		// $whats_my_name.remove();

  	var count = 10;
  	friends = data.friends;
    
    while (count > 0) {
  	console.log(friends[count]["id"]);
  	count -= 1;
  	}



  //console.log(data);
  //  $('#content').html(JSON.stringify(friends));
  });
});
