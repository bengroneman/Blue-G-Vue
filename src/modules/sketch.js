var p5 = require("p5");
var myp5 = new p5(function(sketch) {

window.store = {}; // to communicate between vuejs and p5js
window.store.objs = []; // list of all objects on canvas


var CI = {}; // canvas interactions


let lines = [];

// ************************** setup **************************
sketch.setup = function() {
    // declaring our canvas size
    sketch.createCanvas(600, 300);
    sketch.background(0); //color

    let line = new KochLine();
    lines.push(line);
    
    let canvas_width = sketch.width;

    // Declare our vertices
    let a = new sketch.createVector(0, 173);
    let b = new sketch.createVector(canvas_width, 173);
    let c = new sketch.createVector(canvas_width/2, 173+width*sketch.cos(sketch.radians(30)));
    console.log(a, b, c);

    let start = sketch.createVector(0, 200);
    let end = sketch.createVector(sketch.width, 200);

    console.log(lines);
    lines.push(new KochLine(start, end));
    console.log(lines);

};

// ******************************* draw loop *****************
sketch.draw = function() {
    sketch.background(0);
    CI.draw();

    // Lets draw some cool things below here
    for (line in lines) {
        console.log(line);
        line.display();
    }
};


// ******************* canvas mouse events ********************************
// mouse event
sketch.mousePressed = function(mouseButton) {
    //CI.canvasClick(sketch.mouseX, sketch.mouseY);
}

sketch.mouseDragged = function() {
    //CI.canvasDrag(sketch.mouseX, sketch.mouseY);
    // prevent default
    //return false;
}

sketch.mouseReleased = function() {
    //CI.canvasReleased(sketch.mouseX, sketch.mouseY);
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
    if (radius > 8) {
        drawCircle(x + radius/2, y, radius/2);
        drawCircle(x - radius/2, y, radius/2);
        drawCircle(x, y + radius/2, radius/2);
        drawCircle(x, y - radius/2, radius/2);
    } 
}

// The infamous cantor set
const cantor = (x, y, len) => {
    // Our cantor color
    if (len >= 1) {
        
        sketch.stroke(255);
        sketch.noFill();

        sketch.line(x, y, x + len, y);
        y += 20;
        cantor(x, y, len/3);
        cantor(x + len * 2 / 3, y, len / 3);
    }
}

// Lets get Classy
const KochLine = {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

}

}, 'canvas_container');