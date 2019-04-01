var answers = ["Bootstrap", "undefined", "script", "forEach", "Document object model" ]

$(document).ready(function() {
  $(".quiz").submit(function(event){
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var dob = $("#date").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
      $("input").prop("disabled", true);
      if (question1 === undefined || question2 === undefined || question3 === undefined || question4 === undefined || question5 === undefined) {
          alert("please answer all questions")
      }

      function results() {
        return nameInput + " you got " + correct;
      }

      var correct = 0
      if(question1 == answers[0]) {
        correct += 20;
      }else if (question1 !=answers[0]) {
        correct += 0;
      }
      if(question2 == answers[1]) {
        correct += 20;
      }else if (question2 !=answers[1]) {
        correct += 0;
      }
      if(question3 == answers[2]) {
        correct += 20;
      }else if (question2 !=answers[2]) {
        correct += 0;
      }
      if(question4 == answers[3]) {
        correct += 20;
      }else if (question4 !=answers[3]) {
        correct += 0;
      }
      if(question5 == answers[4]) {
        correct += 20;
      }else if (question5 !=answers[4]) {
        correct += 0;
      }
    var messages = ["congrats", "passed", "It is important you repeat this test"]
		var photo = ["img/congrats.jpg", "img/pass.jpg", "img/fail.jpg" ]
		var score;
		if (correct >= 80) {
			score = 0;
		} else if (correct >= 50 && correct < 80) {
			score = 1;
		} else if (correct <= 30 && correct < 50) {
			score = 2;
		}
		document.getElementById("messages").innerHTML = messages[score];
		document.getElementById("results").innerHTML = results();
		document.getElementById("photo").src = photo[score];

		function myFunction() {
			document.getElementById("retake").style.visibilty = "visible";
		}
		event.preventDefault();
  })
})
