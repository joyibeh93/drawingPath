'use strict';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let x = 75;
let adder = 1;

function draw() {
    x += adder;

    if (x === 600 - 75) {
        adder = -1;
    }
    if (x === 75) {
        adder = 1;
    }

    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, 50);
    ctx.lineTo(x + 25, 75);
    ctx.lineTo(x + 25, 25);
    ctx.lineTo(x, 50);
    ctx.closePath();
    ctx.stroke();

    ctx.fillRect(x + 24.5, 75, 1, 15);

    ctx.beginPath();
    ctx.arc(x, 90, 40, 0, Math.PI);
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.fillRect(x - 40, 110, 90, 20);
    requestAnimationFrame(draw);
}

draw();
// ctx.fill();