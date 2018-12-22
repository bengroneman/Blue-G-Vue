import canvas_interactions from './canvas_interactions.js';

var p5 = require("p5");
var myp5 = new p5(function(sketch) {

window.store = {}; // to communicate between vuejs and p5js
window.store.objs = []; // list of all objects on canvas


var CI = {}; // canvas interactions

// ************************** setup **************************
sketch.setup = function() {
    var cnv = sketch.createCanvas(640, 360);
    CI = new canvas_interactions(sketch);

    // set canvas
    sketch.background(51); //color
};

// ******************************* draw loop *****************
sketch.draw = function() {
    sketch.background(255);
    CI.draw();
    drawCircle(sketch.width/2, sketch.height/2, 200);

};


// ******************* canvas mouse events ********************************
// mouse event
sketch.mousePressed = function(mouseButton) {
    CI.canvasClick(sketch.mouseX, sketch.mouseY);
}

sketch.mouseDragged = function() {
    CI.canvasDrag(sketch.mouseX, sketch.mouseY);
    // prevent default
    return false;
}

sketch.mouseReleased = function() {
    CI.canvasReleased(sketch.mouseX, sketch.mouseY);
}

// ******************* my functions ********************************
// Lesson 8: Nature of code by @author: Danie Shiffman

// Let leverage recursion for a factorial
const factorial = (n) => {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// more fun with recursion, and circles
const drawCircle = (x, y, radius) => {
    sketch.stroke(0);
    sketch.noFill();
    sketch.ellipse(x, y, radius, radius);
    if (radius > 2) {
        drawCircle(x + radius/2, y, radius/2);
        drawCircle(x - radius/2, y, radius/2);
    }
}

}, 'canvas_container');