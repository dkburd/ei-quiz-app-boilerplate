const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Director Harold Ramis originally wanted Tom Hanks for the lead role, but decided against it because Hanks was ...',
      answers: [
        'A. too young',
        'B. not well known',
        'C. unwilling to accomedate production scheules',
        'D. too nice',
      ],
      // correctAnswer: 'D. too nice'
      correctAnswer: 'D.'      
    },

    {
      question: 'How many times did the groundhog, Scooter, bite Bill Murray during filiming?',
      answers: [
        'A. 15',
        'B. 0',
        'C. 2',
        'D. 1',
      ],
      // correctAnswer: 'C. 2'
      correctAnswer: 'C.'      
    },
    {
      question: 'What time does Phil Connors wake up every morning in the time loop?',
      answers: [
        'A: 7:30am',
        'B. midnight',
        'C. 6:00am',
        'D. 6:30am',
      ],
      // correctAnswer: 'C. 6:00am'
      correctAnswer: 'C.'
    },
    {
      question: 'Acorrding to Ramis, about how long is Phil stuck in the time loop?',
      answers: [
        'A: 5 years',
        'B. 10,000 days',
        'C. 382 days',
        'D. 10 years'
      ],
      correctAnswer: 'D.'
    },
            {
      question: 'What is the name of the character played by the groundhog, Scooter? ',
      answers: [
        'A. Ned Ryerson',
        'B. Punxsutawney Phil',
        'C. Bill Murray',
        'D. Philadelphia Phil',
      ],
      correctAnswer: 'B.'
    },


            {
      question: 'Groundhogs Day is what date?',
      answers: [
        'A: January 3rd',
        'B. February 2nd',
        'C. February 3rd',
        'D. January 22nd'
      ],
      correctAnswer: 'B.'
    },
        {
      question: 'Which hobby is Phil not shown taking up during the time loop?',
      answers: [
        'A. figure skating',
        'B. ice sculpting',
        'C. studying French',
        'D. playing piano',
      ],
      correctAnswer: 'A.'
    },
        {
      question: 'During the time loop, which song plays at 6:00am on Phils clock radio each morning?',
      answers: [
        'A. I’ve Got You Babe',
        'B. Time Is On My Side',
        'C. Here I Go Again',
        'D. I Keep Coming Back',
      ],
      correctAnswer: 'A.'
    },
            {
      question: 'What does Ned Ryerson sell?',
      answers: [
        'A. stationery',
        'B. cars',
        'C. insurance',
        'D. umbrellas',
      ],
      correctAnswer: 'C.'
    },
        {
      question: 'What was the correct letter response to the first question on this quiz?',
      answers: [
        'A. C',
        'B. A',
        'C. Do not recall',
        'D. D',
      ],
      correctAnswer: 'D.'
    },
  ],

  quizStarted: false,
  questionCount: 1,
  score: 0
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

//add the starting text and button on load
$( document ).ready(function() {
  
  $(".container").append( 
    "<form id='js-quiz-start-form'></form>"+
    "<form id='answer-submit'></form>"
   );

  if(!store.quizStarted){
    renderWelcome();
  }
})

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//?????????????

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// start quiz
$(function startQuiz() {
  $("#js-quiz-start-form").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
    store.quizStarted=true;
    update();
  })
})

//submit answer
$(function submitAnswer() {
  $("#answer-submit").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
    const{score, questions, quizStarted, questionCount} = store
    const current = questions[questionCount-1]
    const currentAnswer = questions[questionCount-1].correctAnswer
    store.questionCount = store.questionCount+1;
let userAnswer = $('input[name="answer"]:checked').val();
    if(currentAnswer === userAnswer){
// if yes update score      
alert("CORRECT")
      store.score+=10;
    }else{
      alert(`CORRECT ANSWER IS ${(currentAnswer)}`)
    }
//if quiz over render results    
//     if(store.questionCount > store.questions.length ){
// renderResult() funct does not exist yet
//     }
//if quiz not over render next question
update();
  })
})






//check if quiz is over/ no more questions 
//if quiz is not over load next question and answer set, update question number    
  
//else if quiz is over go to quiz results


function renderWelcome(){
  document.querySelector("#js-quiz-start-form").innerHTML = (
    "<div>"+
    "<p>"+
    "Hello There! Welcome."+
    "</p>"+
    "<p>"+
    "This quiz will test your knowledge of the 1993 film, <em>Groundhog's Day</em>"+
    "</p>"+
      "<p>"+
    "The movie so good you'll watch it again <em>and again and again and...</em>"+
    "</p>"+
    "<input type='submit' value='Start' aria-label='start'>"+
    "</div>"+
    "<div class='fixed'>"+
    "<img src='images/groundhogone.png' alt='goundhog' title='goundhog with shadow'>"+
    "</div>"
  )
}

function renderQuestion (questionCount){
  const{ score, questions, quizStarted} = store
  const current = questions[questionCount-1]
  if(quizStarted){
    document.querySelector("#js-quiz-start-form").innerHTML = ""
  }
  document.querySelector("#answer-submit").innerHTML = (
    "<form>"+
    "<p>"+ "Your Score is " + score + "</span>" + " out of 100" + "</p>"+
    "<p>"+ "Question " + questionCount + "</span>"+ " of 10" +"</p>"+
    "<div class='question'>"+
    "<p>"+current.question+"</p"+
    "</div>"+
    "<div class='answers'>"+
    "<ol class='answers-list'>"+
    "<li>"+
    "<input type='radio' name='answer' value="+current.answers[0]+" data-answer=answerA required> <label for='answer'/>"+
    current.answers[0]+
    "</label>"+
    "</li>"+
    "<li>"+
    "<input type='radio' name='answer' value="+current.answers[1]+" data-answer=answerB> <label for='answer'/>"+
    current.answers[1]+
    "</label>"+
    "</li>"+
    "<li>"+
    "<input type='radio' name='answer' value="+current.answers[2]+" data-answer=answerC> <label for='answer'/>"+
    current.answers[2]+
    "</label>"+
    "<li>"+
    "<input type='radio' name='answer' value="+current.answers[3]+" data-answer=answerD> <label for='answer'/>"+
    current.answers[3]+
    "</label>"+
    "</ol>"+
    "</div>"+
    "<div>"+
    "<input type='submit' value='Submit' aria-label='submit answer'/>"+
    "</div>"+
    "</form>"+
    "</div>"+
    "<div class='fixed'>"+
    "<img src='images/groundhogone.png' alt='goundhog' title='goundhog with shadow'>"+
    "</div>"
  )
}



// function  renderResult(){
//   alert('to be added')
// }

function update() {
  // console.log(store.questionCount, store.questions);
  renderQuestion(store.questionCount);

}