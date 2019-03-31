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

  })
})
