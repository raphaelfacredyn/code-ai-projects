# It Moves! - Notes
#### Variables!

* mouseX, mouseY, width, height are all variables
* and as you can start to tell, variables are at the center of all cool things in programming
* so, do you want to be cool?
* WELL MAKE YOUR OWN VARIABLES!

#### But First

* print()

* this command (or a variation) is used by practically every programmer on the planet

* yet when you use an app, or a software, that command is usually never run

* why is that?

* because Its to help the programmer, not to make the program

* lets say I want to know what the value of mouseX

* then I can do

* ```js
  print(mouseX)
  ```

* if I want to know what mouseX added to mouseY are then I can print

* ```js
  print(mouseX+mouseY)
  ```

* if I want to print the truth

* ```js
  print("Raphael is a fat pig")
  ```

* But, why did I put quotes in this message?

* This tells the program, that this is text, and not a command that it should run, also If i had a variable called pig, then it wouldnt print the value of the variable pig, but the actual word "pig"

* I can also combine messages

* ```js
  print("the mouse's x positon is: " + mouseX)
  ```

   

  

* variables can have any name you want

* as long as there are no spaces

* and the first character is a letter

* if I want to create a variable called "myIQ"

* then I would write

* var myIQ

* var, means create a new variable, a NEW variable

* now that I created my variable called "myIQ" I want to give it a value

* to do this I just put the name of the variable and set it equal to the value (notice I didnt write var)

* myIQ = 25

* but there is a shortcut if you want to create a variable and set its value in one line

* just combine the lines

* var myIQ = 25

* however, right now I am very dumb so lets make me smarter (put print statements)

* ```js
  myIQ = myIQ + 1000
  ```

* now I have an IQ of 1025

* but then someone bonks me on the head and I loose half of my brain cells (put print statements)

* so

* ```js
  myIQ = myIQ/2
  ```

* and then a zombie steals my brain and takes all of my remaining brain cells (put print statements)

* so 

* ```js
  print("my Brain cells: "+ myIQ)
  var zombieIQ = 20
  print("the zombies IQ before he ate my brain: " + zombieIQ)
  zombieIQ = zombieIQ + myIQ 
  print("the zombies IQ AFTER he ate my" + zombieIQ)
  myIQ = 0
  print("I have "+myIQ+" brain cells, so I am dead")
  ```







#### Boring... lets do some cool stuff

which one will work?

```js
function setup(){
    createCanvas(500,500)
}
function draw(){
    var ballXposition = 0
    ballXposition = ballXposition + 3
    ellipse(ballXposition, 250, 20, 20)
}
```

```js
function setup(){
    createCanvas(500,500)
    var ballXposition = 0
    ballXposition = ballXposition + 3
}
function draw(){
    ellipse(ballXposition, 250, 20, 20)
}
```

```js
var ballXposition = 0
function setup(){
    createCanvas(500,500)
    ballXposition = ballXposition + 3
}
function draw(){
    ellipse(ballXposition, 250, 20, 20)
}
```

```JS
var ballXposition = 0
function setup(){
    createCanvas(500,500)
}
function draw(){
	ballXposition = ballXposition + 3
    ellipse(ballXposition, 250, 20, 20)
}
```



### Challenge

make a ball that moves up or down

make a ball that moves diagonaly



