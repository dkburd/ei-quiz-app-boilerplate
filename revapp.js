const store = {
  questions: [
    {
      question: 'Director Harold Ramis originally wanted Tom Hanks for the lead role, but decided against it because Hanks was ...',
      answers: [
        'A. too young',
        'B. not well known',
        'C. unwilling to accomedate production scheules',
        'D. too nice',
      ],
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
  quizOver:false,
  questionCount: 1,
  score: 0
};

function renderQuiz(){
  const quiz = generateQuiz();
  $(".container").append(quiz);
}

function generateQuiz(){
  return (
    `
    <form id='js-quiz-start-form'></form>
    <form id='js-answer-submit-form'></form>
    <form id='js-results-form'></form>
    `
  )
}

function renderWelcome(){
  $("#js-quiz-start-form").html(generateWelcome());
}

function generateWelcome(){
  const welcomeTemplate = !store.quizStarted ? 
  `
  <div class='text'>
    <p>
      Hello There! Welcome.
    </p>
    <p>
      This quiz will test your knowledge of the 1993 film, <em>Groundhog's Day</em>
    </p>
    <p>
      The movie so good you'll watch it again <em>and again and again and...</em>
    </p>
    <input type='submit' value='Start' aria-label='start'>
  </div>
  <div class='img'>
    <img src='images/groundhogone.png' alt='goundhog' title='goundhog with shadow'>
  </div>
  `
  :""

  return welcomeTemplate;
}

// TODO : string literal and jquery
function renderResults(){
  const{ score} = store
  document.querySelector("#js-results-form").innerHTML = (
    "<div class='text'>"+
    "<p>"+ "Your Score is " + score + "</span>" + " out of 100" + "</p>"+
    "<input type='submit' value='Try Again' aria-label='Try Again'>"+
    "</div>"+
    "<div class='img'>"+
    "<img src='images/groundhogone.png' alt='goundhog' title='goundhog with shadow'>"+
    "</div>"
  )
}

// TODO
function generateResults(){
  if(store.quizOver){
    return(
      ``
    )
  }else{
    return(
      `
      `
    )
  }
}

function renderQuestion(){
  const question = generateQuestion();
  $("#js-answer-submit-form").html(question);
}

function generateQuestion(){
  const{ score, questions, quizOver, questionCount} = store
  const current = questions[questionCount-1]

  const questionTemplate = !quizOver ?
  `<div class='text'>
  <p> Your Score is   ${score}  </span>   out of 100  </p>
  <p> Question   ${questionCount}  </span>  of 10 </p>
  <div class='question'>
  <p>${current.question}</p
  </div>
  <div class='answers'>
  <ol class='answers-list'>
  <li>
  <input type='radio' name='answer' value=${current.answers[0]} data-answer=answerA required> <label for='answer'/>
  ${current.answers[0]}
  </label>
  </li>
  <li>
  <input type='radio' name='answer' value=${current.answers[1]} data-answer=answerB> <label for='answer'/>
  ${current.answers[1]}
  </label>
  </li>
  <li>
  <input type='radio' name='answer' value=${current.answers[2]} data-answer=answerC> <label for='answer'/>
  ${current.answers[2]}
  </label>
  <li>
  <input type='radio' name='answer' value=${current.answers[3]} data-answer=answerD> <label for='answer'/>
  ${current.answers[3]}
  </label>
  </ol>
  </div>
  <div>
  <input type='submit' value='Submit' aria-label='submit answer'/>
  </div>
  </div>
  </div>
  <div class='img'>
  <img src='images/groundhogone.png' alt='goundhog' title='goundhog with shadow'>
  </div>`
  : ""
  return questionTemplate;
}

//restart quiz
function restartQuiz() {
  $("#js-results-form").submit(event => {
    event.preventDefault();
    store.score=0;
    store.questionCount=1;
    store.quizStarted=false;
    store.quizOver=false;
    renderWelcome();
  })
}

// start quiz
function startQuiz() {
  $("#js-quiz-start-form").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
    store.quizStarted=true;
    renderWelcome();
    renderQuestion();
  })
}

//submit answer
function submitAnswer() {
  $("#js-answer-submit-form").submit(event => {
//  stop the default form submission behavior
    event.preventDefault();
    const{ questions, questionCount } = store
    const currentAnswer = questions[questionCount-1].correctAnswer
    let userAnswer = $('input[name="answer"]:checked').val();

    if(currentAnswer === userAnswer){  
      store.score+=10;
      alert("CORRECT");
    }else{
      alert(`CORRECT ANSWER IS ${(currentAnswer)}`);
    }
    
    if(questionCount === questions.length){
      store.quizOver=true;
      renderQuestion();
      renderResults();
    } else {
      store.questionCount+=1;
      renderQuestion();
    }
  })
}

function handleQuiz(){
  renderQuiz();
  renderWelcome();
  restartQuiz();
  startQuiz();
  submitAnswer();
}

$(handleQuiz);