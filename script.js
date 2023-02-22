'use strict';



if (typeof window === 'undefined') {

} else {

    let randomNumber = Math.floor((Math.random() * 20) + 1);
    console.log(randomNumber);
    let score = 20;
    let highScore = 0;

    const messageFunction = function(message) {
        document.querySelector('.message').textContent = message;
    };

    const scoreFunction = function(score) {
        document.querySelector('.score').textContent = score;
    };

    const backgroundColorChange = function(colorChange) {
        document.querySelector(`body`).style.backgroundColor = colorChange;
    };

    const correctNumber = function(number) {
        document.querySelector(`.number`).textContent = number;
    };

    const highScoreNumber = function(highscore) {
        document.querySelector(`.highscore`).textContent = highscore;
    };



    document.querySelector(`.check`).addEventListener(`click`, function() {
        const guessNumber = Number(document.querySelector(`.guess`).value);
        if (!guessNumber) {
            messageFunction('Not a Number!');
        } else if (guessNumber === randomNumber) {
            messageFunction('🎉 You Gussed Correct Number!');
            backgroundColorChange('#60b347');
            correctNumber(randomNumber);
            document.querySelector(`.number`).style.width = `30rem`;
            if (score >= highScore) {
                highScore = score;
                console.log(score);
                highScoreNumber(score);
            }
        } else if (guessNumber !== randomNumber) {
            messageFunction(guessNumber > randomNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            scoreFunction(score);
            if (score < 1) {
                messageFunction(`☠ Game Over!`)
                backgroundColorChange('#FF0000');
                scoreFunction(0);
            }
        }
    });

    document.querySelector(`.again`).addEventListener(`click`, function() {
        score = 20;
        randomNumber = Math.floor((Math.random() * 20) + 1);
        console.log(randomNumber);
        document.querySelector(`.guess`).value = '';
        backgroundColorChange(`#222`);
        correctNumber(`?`);
        scoreFunction(`20`);
        messageFunction(`Start guessing...`);
    });
}