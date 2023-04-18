//Project : Guess Number DOM practice
//Name: Luis Padilla 
//Date: February 2023
'use strict';
//Generating random number from 1 to 20
let number  = Math.trunc(Math.random()*20)+1;

//if number not equal to guessed number execute function reducingScore
// setting the score number
let scoreNumb = 20;
const reducingScore = function(){
    if (scoreNumb >0){    scoreNumb--;
        var elScore = document.querySelector('.score');
        elScore.textContent =scoreNumb;
    }
}

// function checks if scoreNumb is equal to zero to drop a message tha player loose or not 
const checkScore  = function(sentence){
    if(scoreNumb === 0){
        document.querySelector('.message').textContent='You Loose!'
    }else{
        document.querySelector('.message').textContent=sentence;
    }
}
//setting highscore value
let highscoreVal =0

//setting highscore function
let setHighscore = function(){
    if ( highscoreVal > scoreNumb){
        document.querySelector('.highscore').textContent=highscoreVal;
    }else if(highscoreVal < scoreNumb){
        document.querySelector('.highscore').textContent=scoreNumb;
    }
}

// Comparing numbers 
var compare = document.querySelector('.check');
compare.addEventListener('click',function(){
    var guess= Number (document.querySelector('.guess').value);
    console.log (guess, typeof guess);

    if (!guess){
        document.querySelector('.message').textContent='No number!'
    // When player wins
    }else if (guess === number){
        const elNumb =document.querySelector('.number');
        elNumb.textContent= number;
        document.querySelector('.message').textContent='Correct Number🌵🌴🌵!'
        //manipulating the css
        document.querySelector('body').style.backgroundColor = '#FBD000'
        setHighscore();

     //when number is too low!   
    }else if(number > guess) {
        reducingScore();
        var sentence = 'Number too low!🍄🍄';
        checkScore(sentence);
    //when number is to high!
    }else if(number < guess){
        reducingScore(); 
        var sentence = 'Number too high!🍄🍄';
        checkScore(sentence);
    }
})


var startAgain = document.querySelector('.again').addEventListener('click',function(){
    
    //changing box incognit value 
    document.querySelector('.number').textContent= '?';
    //changing sentence to start guessing
    document.querySelector('.message').textContent = 'Start guessing!';
   //changing check value
    var guess = document.querySelector('.guess');
    guess.value = '';
    //resetting  score value 
    scoreNumb=20;
    document.querySelector('.score').textContent = scoreNumb;
    //resetting background color
    document.querySelector('body').style.backgroundColor='#222'
} )
