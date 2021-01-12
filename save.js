// my stuff

let gameOver = false;
let score= 0;
let questionCount=1;
// let questionCountDisplay =document.querySelector("#questionCountDisplay");
// let scoreDisplay = document.querySelector("#scoreDisplay");


//add the starting text and button on load
$( document ).ready(function() {
$(".container").append( 
 "<form id='js-quiz-start-form'>"+
    "<p>"+
    "Hello There! Welcome."+
    "</p>"+
    "<p>"+
    "This quiz will test your knowledge of Groundhog's Day"+
    "</p>"+
    "<input type='submit' value='Start' aria-label='start'>"+
    "</form>"
);
$(".container").append( 

 "<form id='js-quiz'class='hidden'>"+
 "<p>"+
"Question " + questionCount + "</span>"+ " of 9" +
 "</p>"+
 "<p>"+
"Your Score is " + score + "</span>" + " out of 100" +
 "</p>"+
"<div class='question'>"+
"<p>"+
"QUESTION"+
"</p"
"</div>"+

"<form id='js-quiz'class='hidden'><p>Question <span>score</span> of 9</p><p>Your Score is ${score}</span> out of 100</p><div class='question'><p>QUESTION</p</div><div class='answers'>" +
"<ol>"+
"<li>"+
"<input type='radio' name='answer' data-answer='Answer A'> <label for='answer'>Answer A</label>"+
"</li>"+
"</ol>"+
"</div>"

)
})

$(function() {
  $("#js-quiz-start-form").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
    // alert("connected")
  $("#js-quiz-start-form").toggleClass("hidden");
  $("#js-quiz").toggleClass("hidden");
  })
})