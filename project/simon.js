let colors = ['green', 'red', 'yellow', 'blue'];
let sequence = [];
let input = [];
let level = 0;
let playing = false;


let start = document.getElementById('start');
let leveldisplay = document.getElementById('level');
let message = document.getElementById('message');
let colorboxes = [
    document.getElementById('green'),
    document.getElementById('red'),
    document.getElementById('yellow'),
    document.getElementById('blue')
];

start.addEventListener('click', started);
for (let i = 0; i < colorboxes.length; i++) {
    colorboxes[i].addEventListener('click', function() {
        clickbox(colors[i]);
    });
}

function started() {
    if (playing) {
        return;
    }
    sequence = [];
    input = [];
    level = 0;
    playing = true;
    message.textContent = "Remember the sequence!";
    nextlevel();
}

function nextlevel() {
    level++;
    leveldisplay.textContent = 'Level:' + level;
    input = [];
    
    let randomcolor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomcolor);

    play(0);
}

function play(num) {
    if (num >= sequence.length) {
        if (!playing) {
            return;
        }
        message.textContent = "Your turn! Try to repeat.";
        return;
    }
    let color = sequence[num]
    highlight(color)
    setTimeout(function() {
        play(num + 1)}, 800);
}

function clickbox(color) {
    if (!playing) {
        return;
    }
    highlight(color);
    input.push(color);
    
    if (input[input.length - 1] !== sequence[input.length - 1]) {
        end();
        return;
    }
    
    if (input.length === sequence.length) {
        message.textContent = "Correct! Next level...";
        setTimeout(nextlevel, 1000);
    }
}

function highlight(color) {
    let button = document.getElementById(color);
    button.style.opacity = 1;
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.opacity = 0.75;
        button.style.transform = 'scale(1)';
    }, 300);
}


function end() {
    playing = false;
    leveldisplay.textContent = 'Game Over!!!';
    message.textContent = 'You reached level ' + level;
}