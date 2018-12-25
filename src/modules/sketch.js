var p5 = require("p5");
var myp5 = new p5(function(sketch) {

window.store = {}; // to communicate between vuejs and p5js
window.store.objs = []; // list of all objects on canvas


var CI = {}; // canvas interactions


let lines = [];
let _ = sketch;



// ************************** setup **************************
_.setup = function() {
    // declaring our canvas size
    _.createCanvas(360, 360);
    _.pixelDensity(1);
    _.background(0); //color
    _.loadPixels();

};

// ******************************* draw loop *****************
_.draw = function() {
    // global vars
    let xr = _.canvas.width;
    let yr = _.canvas.height;

    let xmin = -2.0;
    let xmax = 1.0;
    let ymin = -1.5;
    let ymax = 1.5;

    //lets get colorfrul
    let mr0 = 0;
    let mg0 = 0;
    let mb0 = 0;
    _.background(0);

    // Lets draw some cool things below here
    while (mr0 == mg0 || mr0 == mb0 || mg0 == mb0) {

        mr0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));
        mg0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));
        mb0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));

    }

    let mr1 = 256 / mr0;
    let mg1 = 256 / mg0;
    let mb1 = 256 / mb0;

    let maxIt = 256;
    let x = 0.0;
    let y = 0.0;
    let zx = 0.0;
    let zx0 = 0.0;
    let zy = 0.0;
    let zx2 = 0.0;
    let zy2 = 0.0;

    for (let ky = 0; ky < yr; ky++) {
        y = ymin + (ymax - ymin) * ky / yr;
        for ( let kx = 0; kx < xr; kx++) {
            x = xmin + (xmax - xmin) * kx /xr;
            zx = x;
            zy = y;
            for (let i = 0; i < maxIt; i++) {
                zx2 = zx *zx;
                zy2 = zy * zy;
                if (zx2 + zy2 > 4.0) break;
                zx0 = zx2 - zy2 + x;
                zy = 2.0 * zx * zy + y;
                zx = zx0;
            }
            let p = (xr * ky + kx) * 4;
            pix[p] = i % mr0 * mr1;     // red
            pix[p + 1] = i % mg0 * mg1; // green
            pix[p + 2] = i % mb0 * mb1; //blue
            pix[p + 3] = 255;           // alpha
        }
    }

};


// ******************* canvas mouse events ********************************
// mouse event
_.mousePressed = function(mouseButton) {
    //CI.canvasClick(sketch.mouseX, sketch.mouseY);
}

_.mouseDragged = function() {
    //CI.canvasDrag(sketch.mouseX, sketch.mouseY);
    // prevent default
    //return false;
}

_.mouseReleased = function() {
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
    _.stroke(0);
    _.noFill();
    _.ellipse(x, y, radius, radius);
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
        
        _.stroke(255);
        _.noFill();

        _.line(x, y, x + len, y);
        y += 20;
        cantor(x, y, len/3);
        cantor(x + len * 2 / 3, y, len / 3);
    }
}

// Lets get Classy
// Refactored from the Nature Of Code CHAPTER 8: Fractals
// Author: Daniel Shiffman


}, 'canvas_container');