# The Circle - Teacher Notes

#### What does function setup do?

* function setup gets automatically run by p5.js
* explain when a function starts and ends
* mostly used to setup things that will be used later in program
* runs once at the start of the program, only once

#### What does function draw do?

* gets automatically run by p5.js
* is the core of your program where most things will happen
* runs after function setup, and runs forever afater that (re-runs itself until program is stopped)

#### createCanvas()

* make sure people know what a painting canvas is
* this is the same thing, if we want to draw, we need a canvas
* this is a command that takes in input (explain how to give command input)
* createCanvas(width, height) - all units are in pixels

#### ellipse()

* a command already created by p5.js for you to use
* draws a ellipse (basically a circle, explain what ellipse is)
* takes in input, configurations that the command will use when it runs
* takes in (x coordinate, y coordinate, width, height) all units are in pixels

#### width and height

* represent the width and height of the canvas
* considering width = 500; writing width + 13 is the same thing as writing 500 + 13, both will equal 513 (unless the width of the canvas changes)
* and I can do all mathematical operations
* It just represents a number like any other