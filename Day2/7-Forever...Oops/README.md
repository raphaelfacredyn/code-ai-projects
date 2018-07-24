#### Forever... Oops - Notes

its, a function

that calls itself

we can create a function called diagonal rectangle

```js
function diagonalRectangle(){
    // Code in here
}
```

this function will draw rectangle given the position and a size

```js
function diagonalRectangle(xpos,ypos,width,height){
   rect(xpos,ypos,width,height)
}
```

so basically, we did nothing, we just but a "wrapper" around the rectangle function

but what if we do this?

```js
function diagonalRectangle(xpos,ypos,width,height){
   rect(xpos,ypos,width,height)
   diagonalRectangle(xpos,ypos,width,height)
}
```

the function runs itself, which runs itself...

but this will just draw an infinite number of rectangle, kind of useless

so... what if I do this

```js
function diagonalRectangle(xpos,ypos,width,height){
   rect(xpos,ypos,width,height)
   diagonalRectangle(xpos+20,ypos+20,width,height)
}
```

Ok, whats going to happen?

no, lets see who's right

no one, it doesn't work

this is because It goes on forever

so we need to put a limit

```js
var recursionDepth = 10
function diagonalRectangle(xpos,ypos,width,height,counter){
   rect(xpos,ypos,width,height)
   if(counter < recursionDepth){
   	diagonalRectangle(xpos+20,ypos+20,width,heightcounter+1)
   }
}
```

now? yep



Challenge

make this:

(show square fractal)