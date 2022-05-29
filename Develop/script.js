//Timer


function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 100);
        sec = parseInt(secondsRemaining % 100);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function () {
    let time_minutes = 0; // Value in minutes
    let time_seconds = 75; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);
};

//first page
//document.getElementById('question').textContent = 'Coding Quiz Challenge';
//document.getElementById('question2').textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';

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
        correct: '4.console.log'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;


//define the button function to make the coding short
//put $ sign in the front to tell it includes HTML object
const $button = document.getElementsByTagName('button');
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

//1.1 Send the answers strings to HTML
// $button[0].textContent=answers[0];
// $button[1].textContent=answers[1];
// $button[2].textContent=answers[2];
// $button[3].textContent=answers[3];

//Judge the answer by the click is correct/incorrect
//refactoring the if function by making clickHandler function and taget function
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){ 
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Incorrect!';
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        document.getElementById('question').textContent = 'All done!';
        document.getElementById('question2').textContent = 'Your final score is'+50;
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

