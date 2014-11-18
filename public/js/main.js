$(document).ready(function() {

  var friends, index, count, me, hints;
  var $quiz_container = $(".quiz-container");
  var $guess = $("#guess");
  var $form = $(".form-group");
  var $form_feedback = $(".form-control-feedback");
  var $content = $("#content");
  var $helptext = $(".helptext")
  count = 0;
  hints = 0;

  var renderFriend = function(){
    if(friends.length > 0){
      $guess.val("");
      $helptext.text("");
      hints = 0;
      $form.removeClass("has-success").addClass("has-warning");
      $form_feedback.hide();
      $quiz_container.html("<img src='https://graph.facebook.com/" + friends[0].id + "/picture?type=large'></img>");
    } else {
        $content.html("<h2>You finished!</h2>");
      if (count > 15) {
        $content.append("<p>Well, I guess you actually are a good friend. \n You got " + count + " out of 20.</p>");
      } else if (count > 10) {
        $content.append("<p>You might be a little generous with the term 'friend', aren't you? \n" + count + "out of 20.</p>");
      } else if (count > 5) {
        $content.append("<p>YOU DON'T EVEN KNOW HALF OF THESE PEOPLE. \n" + count + " out of 20.\n BOOOOOOOOOOOOO!</p>");
      } else {
        $content.append("<p>I really don't know what to say ... only " + count + "?</p>");
      }
    }
  };

  var guess = function(){
    if( $guess.val() === friends[0].name){
      $helptext.text("Nice! That's my name!");
      $form.removeClass("has-warning").addClass("has-success");
      $form_feedback.show();
      count++;
      _.delay(function(){
        friends.shift();
        renderFriend();
      }, 3000);
    } else {
      $helptext.text("That's not my full name");
    }
  };

  var skip = function(){
    $helptext.text("Shame on you... you don't remember " + friends[0].name + "?");
    _.delay(function(){
      friends.shift();
      renderFriend();
    }, 4000);
  };

  var hint = function(){
    if (hints === 0){
      $helptext.text("The first letter is " + friends[0].name.slice(0, 1) + ". Press to get the next letter.");
      hints++;
    } else if (hints > 3){
      $helptext.text("The first " + (hints + 1) + " letters are " + friends[0].name.slice(0, hints + 1) + ". I can't give you any more hints!");
    }
    else {
      $helptext.text("The first " + (hints + 1) + " letters are " + friends[0].name.slice(0, hints + 1) + ". Do you remember yet?");
      hints++;
    }
  }


  $("#guess").keyup(function(){
    guess();
  });

  $(".skip").click(skip);
  $(".hint").click(hint);

  $.ajax("/api/facebook").done(function(data){
    $content.fadeIn(300);
    friends = _.shuffle(_.sample(data.friends,20));
    me = data.me;
    console.log(friends);
    renderFriend();
  });
});
