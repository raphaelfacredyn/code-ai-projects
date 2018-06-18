# The Circle – Explained

Is the one of the most basic programs that one could create with p5.js and Javascript. Its is just a program that has circle following your mouse, which draws.

## function setup(){ ... }

### function setup

a function is a block of code with a name, in this case **setup**, this is useful, because if I want to write a lot of code which is repeated then I could write:

```javascript
setup()

setup()

setup()
```

that would be the equivient of writing all the code inside the function "setup" three times (Functions have a lot more power than that, but that is for later)

### ()

Ignore this for now

### {...}

These brackets ( **{** and **}** are called brackets) symbolize the start and end of a function, so where the code for the function starts, and ends. All the code for that function would go in the "**...**" and would only belong to that function.

### So what does <u>function setup(){ ... }</u> really do?

function setup will run the code inside of itself only once at the beginning of the program. Most of the time it is used to "setup" the things that will be needed for the rest of the program.

## An example function

```javascript
function breakRock(){
    find the rock
    pick up the rock
    hurl the rock towards the floor
}
```

now that I created this break rock function, if I wanted to break 10 rocks than I could do this:

```
breakRock()
breakRock()
breakRock()
breakRock()
breakRock()
breakRock()
breakRock()
breakRock()
breakRock()
breakRock()
```

but If I was dumb and didn't use a function then I would have to write

```
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
find the rock
pick up the rock
hurl the rock towards the floor
```

now, you tell me, which one is more confusing?

## function draw(){ ... }

function draw has three major diffrences:

1.  its called draw (duhhh)
2. it runs after function setup
3. instead of running only once, it runs 60 times per second until the program stops (eg: the window is closed, the computer is shut down, or, the more probable option a nuclear bomb explodes but the computer doesnt break, but then a mutant chicken-cow-lion-hybrid eats the computer and breaks it.)

So if I were to catalog which functions runs in order, then it would be like this:

* setup
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* draw
* ... forever, until... a nuclear bomb explodes...
* draw
* draw
* draw
* ... mutant chicken-cow-lion-hybrid eats the computer and breaks it ...
