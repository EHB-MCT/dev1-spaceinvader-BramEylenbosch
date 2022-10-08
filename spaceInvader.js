"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader() {
    context.beginPath();
    context.fillRect(50, 50, 300, 300);
    context.fillStyle = "black";

    context.beginPath();
    context.fillStyle = "lime";
    context.fillRect(75, 75, 50, 250);
    context.fillRect(275, 75, 50, 250);
    context.fillRect(125, 275, 150, 50);
    context.fillRect(125,175, 150, 50);
    context.fillRect(125, 75, 50, 50);
    context.fillRect(225, 75, 50 ,50);
}