/**
 * Example store structure
 */

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Director Harold Ramis originally wanted Tom Hanks for the lead role, but decided against it because Hanks was ...',
      answers: [
        'A: too young',
        'B: not well known',
        'C: unwilling to accomedate production scheules',
        'D: too nice',
      ],
      correctAnswer: 'D: too nice'
    },

    {
      question: 'How many times did the groundhog, Scooter, bite Bill Murray during filiming?',
      answers: [
        'A: 15',
        'B: 0',
        'C: 2',
        'D: 1',
      ],
      correctAnswer: 'c. 2'
    },
    {
      question: 'What time does Phil Connors wake up every morning in the time loop?',
      answers: [
        'A: 7:30am',
        'B: midnight',
        'C: 6:00am',
        'D: 6:30am',
      ],
      correctAnswer: 'c. 6:00am'
    },
    {
      question: 'Acorrding to Ramis, about how long is Phil stuck in the time loop?',
      answers: [
        'A: 5 years',
        'B: 10,000 days',
        'C: 382 days',
        'D: 10 years'
      ],
      correctAnswer: 'd: 10 years'
    },
            {
      question: 'Groundhogs Day is what date?',
      answers: [
        'A: January 3rd',
        'B: February 2nd',
        'C: February 3rd',
        'D: January 22nd'
      ],
      correctAnswer: 'B. February 2nd'
    },
        {
      question: 'Which hobby is Phil not shown taking up during the time loop?',
      answers: [
        'A: figure skating',
        'B: ice sculpting',
        'C: studying French',
        'D: playing piano',
      ],
      correctAnswer: 'A. figure skating'
    },
        {
      question: 'During the time loop, which song plays at 6:00am on Phils clock radio each morning?',
      answers: [
        'A: I’ve Got You Babe',
        'B: Time Is On My Side',
        'C: Here I Go Again',
        'D: I Keep Coming Back',
      ],
      correctAnswer: 'A: I’ve Got You Babe'
    },
            {
      question: 'What is the name of the character played by the groundhog, Scooter? ',
      answers: [
        'A: Groundhog',
        'B: Punxsutawney Phil',
        'C: Bill Murray',
        'D: Philadelphia Phil',
      ],
      correctAnswer: 'B. Punxsutawney Phil'
    },
        {
      question: 'What was the correct letter response to the first question on this quiz?',
      answers: [
        'A: C',
        'B: A',
        'C: Do not recall',
        'D: D',
      ],
      correctAnswer: 'D: D'
    },


  ],


  // quizStarted: false,
  // questionNumber: 0,
  // score: 0
};



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

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

// when quiz is started, add q, a's and submit button
$(".container").append( 
 "<form id='js-quiz'class='hidden'>"+
 "<p>"+
"Your Score is " + score + "</span>" + " out of 100" +

 "</p>"+
 "<p>"+
"Question " + questionCount + "</span>"+ " of 9" +
 "</p>"+
"<div class='question'>"+
"<p>"+
questionOne+
"</p"+
"</div>"+
"<div class='answers'>"+

"<ol class='answers-list'>"+
"<li>"+
"<input type='radio' name='answer' data-answer=answerA> <label for='answer'>"+
 answerA+
 "</label>"+

"</li>"+
"<li>"+
"<input type='radio' name='answer' data-answer=answerB> <label for='answer'>"+
 answerB+
 "</label>"+
"</li>"+
"<li>"+
"<input type='radio' name='answer' data-answer=answerC> <label for='answer'>"+
 answerC+
 "</label>"+
"<li>"+
"<input type='radio' name='answer' data-answer=answerD> <label for='answer'>"+
 answerD+
 "</label>"+

"</ol>"+
"</div>"+
"<div id='answer-submit'>"+
"<input type='submit' value='Submit' aria-label='submit answer'>"+
"</div>"+
"</form>"
)
})



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//?????????????




/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// start quiz
$(function() {
  $("#js-quiz-start-form").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
    // alert("connected")
  $("#js-quiz-start-form").toggleClass("hidden");
  $("#js-quiz").toggleClass("hidden");
  })
})
//submit answer
$(function() {
  $("#answer-submit").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
// check if answer is correct
// if yes update score
//show correct answer
//check if quiz is over/ no more questions 
//if quiz is not over load next question and answer set, update question number    
//else if quiz is over go to quiz results

  })
})



// my stuff

// this not working, set a variable to be the first question 
// const questionOne = store.questions.questions.question[0];

let gameOver = false;
let score= 0;
let questionCount=1;
let questionOne=store.questions[0].question
let answerA=store.questions[0].answers[0]
let answerB=store.questions[0].answers[1]
let answerC=store.questions[0].answers[2]
let answerD=store.questions[0].answers[3]

