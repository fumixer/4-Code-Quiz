var startView= document.getElementById('startQuiz');
var quizOverview= document.getElementById('quizOverview');
var questionView = document.getElementById('questionView');
var startBtn = document.getElementById('startBtn');
var countDownTimer =document.getElementById('count-down-timer');
var finalScore = document.getElementById('finalScore');
var highScoreView = document.getElementById('highScoreView2');
let submit4 = document.getElementById('submit4')
var goBack = document.getElementById('goBack')
var initials = document.getElementById('initials')

// Timer
let countInterval;
var time = 75;

function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown() {

    countInterval = setInterval(function () {
        time--;
        countDownTimer.textContent = 'Time: '+`${paddedFormat(time)}`;
    
        if (time < 0) { 
            endQuiz();
        };
    }, 1000);
}

function setTimer () {
    countDownTimer.textContent = 'Time: '+`${paddedFormat(time)}`;
    startCountDown();
};

function startQuiz (){
    startView.style.display='none';
    questionView.style.display='block';
    highScoreView.style.display='none';
    setTimer();
}


//define the questions and answers
const quiz = [
    {
        question: 'Commomly used data types DO Not include；',
        answers: [
            '1. strings',
            '2. boolens',
            '3. alerts',
            '4. numbers'],
        correct: '3. alerts'
    }, {
        question: 'The condition in an if / else statement is enclosed with __________ .',
        answers: [
            '1. quotes',
            '2. curly brackets',
            '3. parenthesis',
            '4. square brackets'],
        correct: '2. curly brackets'
    }, {
        question: 'Arrays in JacaScript can be used to store __________.',
        answers: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'],
        correct: '4. all of the above'
    }, {
        question: 'String values must be enclosed within ___________ when being assigned to variables.',
        answers: [
            '1. Commas',
            '2. curly brackets',
            '3. quotes',
            '4. parenthesis'],
        correct: '1. Commas'
    }, {
        question: 'A very useful tool used during development and debugging for printing content to the devugger is;',
        answers: [
            '1. javaScript',
            '2. terminal/bash',
            '3. for loops',
            '4. console.log'],
        correct: '4. console.log'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;


//define the button function to make the coding short
//put $ sign in the front to tell it includes HTML object
const $button = document.getElementsByClassName('btn');
const buttonLength = $button.length;

//quiz all process
const setupQuiz = () => {
    //Send the questions to HTML
    document.getElementById('question').textContent = quiz[quizIndex].question;
    //Refactoring of 1.1
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
//call the action
setupQuiz();

//Judge the answer by the click is correct/incorrect
//refactoring the if function by making clickHandler function and taget function
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){ 
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result2').textContent = 'Correct!';
    } else {
        time-=10;
        countDownTimer.textContent = 'Time: '+`${paddedFormat(time)}`;
        document.getElementById('result').textContent = 'Wrong!';
        document.getElementById('result2').textContent = 'Wrong!';
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        endQuiz();
    }
};

//refactoring the events(clicks) by making handlerIndex property and while loop
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
       });
    handlerIndex++;
}

// All done ! page
function endQuiz() {
    clearInterval(countInterval);
    quizOverview.style.display='block';
    questionView.style.display='none';
    highScoreView.style.display='none';
    finalScore.textContent=time;

    // var newScore = { initials, finalScore };
}

//Showing the final score page
function highScores() {
    // clearInterval(countInterval);
    quizOverview.style.display='none';
    questionView.style.display='none';
    highScoreView.style.display='block';
    finalScore.textContent=time;


    document.getElementById('highScore2').textContent = initials + time ;
    console.log(time)

}

// function submitResults() {
//     var finalScore = document.getElementById("Time").innerText;
  
//     var displayScore = document.getElementById("highScore2");
//     displayScore.textContent = finalScore;
    
//     var initials = initialsEl.value;
//     var newScore = { initials, finalScore };
//     //console.log(newScore)
//     localStorage.setItem("highscores", JSON.stringify(newScore));
//     var highscoresArray = [];
//     highscoresArray.push(newScore);
//     //console.log(highscoresArray);
//   };
  


startBtn.addEventListener('click', startQuiz) 
goBack.addEventListener('click', endQuiz)