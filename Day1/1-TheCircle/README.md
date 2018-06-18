# The Circle – Explained

Is the one of the most basic programs that one could create with p5.js and Javascript. Its is just a program that has circle following your mouse, which draws.

## function setup(){ ... }

### function setup

a function is a block of code, with a name, in this case, **setup** this is useful, because if I want to write a lot of code which is repeated then I could write:

```javascript
setup()

setup()

setup()
```

that would be the equivient of writing all the code inside the function "setup" three times. (there is much more power that comes with a functions, but that will be explained later on)

### ()

Ignore this for now

### {...}

These brackets ( **<u>{</u>** and **}** are called brackets) symbolise the start and end of a function, so where the code for the function starts, and ends. basically all the code that are in the place of the "**...**" corresponds to that function.

### So what does <u>function setup(){ ... }</u> really do?

function setup will run the code inside of Itself only once at the beginnin of the program. Most of the time it is used to "setup" the things that will be needed for the rest of the program.

### An example function

```javascript
function breakRock(){
    find the rock
    pick up the rock
    hurl the rock towards the floor
    dab because why not
}
```

now that I create this break rock function, then I if I wanted to break 10 rocks than I could do this:

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

but If I was dumb and I didnt use a function then I would have to write

```
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
find the rock
pick up the rock
hurl the rock towards the floor
dab because why not
```

now, you tell me, which one is more confusing?

# function draw(){ ... }

function draw has three major diffrences:

1.  its called draw (duhhh)
2. it runs after function setup
3. instead of running only once, it runs itself forever until the program stops
   (for example: the wondow is closed, the computer is shut down, or, the more probable option a nuclear bomb explodes but the computer doesnt break, but then a mutant chicken-cow-lion-hybrid eats the computer and breaks it.)

So if I were to catalog which functions runs in order, then it would be like this:

```
setup
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
draw
... forever, unless... a nuclear bomb explodes...
```
