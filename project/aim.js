let game = document.getElementById('game');
let scoredisplay = document.getElementById('score');
let target = document.querySelector('#t');
let button = document.getElementById('buttons');
let timedisplay = document.getElementById('timer');
let difficultydisplay = document.getElementById('difficulty');
let startgame = document.getElementById('start');
let stopgame = document.getElementById('stop');

let difficulty = "Easy";
let size = 30;
let score = 0;
let time = 60;
let starttime = 4;
let started = false;


startgame.addEventListener('click', start);
stopgame.addEventListener("click", stop);
target.addEventListener('click', () => {
        score += 1;
        scoredisplay.textContent = 'Score: ' + score;
        init();
    });
button.addEventListener("click", function() {
    let choice = event.target;
    difficulty = choice.textContent;
    if (started) {
        return;
    }
    
    difficultydisplay.textContent = 'Difficulty: ' + difficulty;
    
    if (difficulty == "Easy") {
        size = 30;
    } 
    else if (difficulty == "Medium") {
        size = 20;
    } 
    else if (difficulty == "Hard") {
        size = 10;
    }
    
});


function init() {      
    target.style.width = size + 'px';
    target.style.height = size + 'px';                
    target.style.left = Math.random() * 550 + 'px';
    target.style.top = Math.random() * 350 + 'px';
    target.style.backgroundColor = '#' +(Math.round(Math.random() * 899999 + 100000));
    
}
function timer() {
    if (time == 0) {
        timedisplay.textContent = 'Time: 0';
        end();
        return;
    }

    time--
    timedisplay.textContent = 'Time: ' + time;
    setTimeout(timer, 1000);
    
}
function starttimer() {
    if (starttime == 1) {
        timer();
        return;
    }

    starttime--
    timedisplay.textContent = 'Game starting in: ' + starttime;
    setTimeout(starttimer, 1000);
}
function start() {
    if(started) {
        return;
    }

    started = true;
    starttime = 4;
    
    starttimer()
    setTimeout(reset, 3000);
    setTimeout(init, 3000);
}
function reset() {
    time = 60;
    score = 0;
    target.style.display = 'block';
    scoredisplay.textContent = 'Score: ' + score;
}
function end() {
    started = false;
    target.style.display = 'none';
    alert('Game Over! Your score is ' + score + ' on ' + difficulty + ' difficulty!');
}
function stop(){
    time = 0;
}
