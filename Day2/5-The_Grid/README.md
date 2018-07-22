# The Grid - Notes
#### for()

* This is called a for loop

* Ex:

  ```javascript
  for(var i = 1; i <= 10; i++) {
      print(i)
  }
  ```

  Which would print:

  ```
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  ```

* But what does ```(var i = 1; i <= 10; i++)``` mean

* Lets break it down

  * var i = 1

    This is just making a variable called i which is 1

  * i <= 10

    This is a boolean/condition, it just checks if i is less than or equal to 1

  * i++

    This means the same thing as i = i + 1

* OK well now you understand what each part is but what does it *mean*

  * Well it tells the computer create a variable called i and set it to 1
  * Then the computer checks the condition in this case ```i <= 10```
    * If it is true: it keeps on going
    * If it is false: it stops here and the for loop ends
  * then the computer runs the code in the for loop
  * then the computer runs the third thing, in this case i++
  * and then the computer runs the condition like above
  * and then runs the code in the for loop
  * and then runs the third thing, in this case i++

## Challenge 1

Move the grid out of the upper left corner

## Challenge 2

Add separation between the rectangles

## Challenge 2

Make a 2D grid