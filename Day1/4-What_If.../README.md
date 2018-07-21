# What If... - Notes

#### if()

* it only runs the code in the it if the stuff in the parentheses is true

* Ex:

  ```javascript
  var speedLimit = 65
  var speed = 2000
  
  if (speed <= speedLimit) {
      print("Cops are happy")
  } else {
      print("Cops are comming")
  }
  // But what does <= mean?
  ```

#### booleans

* variables that contain either true or false

* Ex:

  ```javascript
  var arthurIsDumb = true // We already knew that
  arthurIsDumb = false // This is a lie
  ```

#### ===

- "===" : is equal to

- these are used to compare variables

- Ex:

  ```javascript
  var raphaelIQ = 10000
  var arthurIQ = 20
  
  var sameIQ = raphaelIQ === arthurIQ
  // sameIQ is false
  
  if(sameIQ) {
      print("They are equally smart")
  } else {
      print("One of them is smarter")
  }
  
  // Or you could do
  
  if(raphaelIQ === arthurIQ) {
      print("They are equally smart")
  } else {
      print("One of them is smarter")
  }
  ```

#### !

- "!" : not

- makes false true and true false

- can be combined with \=== to make !\==

- Ex:

  ```javascript
  var raphaelIQ = 10000
  var arthurIQ = 20
  
  var sameIQ = raphaelIQ === arthurIQ
  // sameIQ is false
  var notSameIQ = !sameIQ
  // notSameIQ is true
  
  // Or you could do
  
  var notSameIQ = raphaelIQ !== arthurIQ
  // notSameIQ is true
  ```

#### \< and \>

* "\<" : less than

* "\>" : greater than

* these are used to compare numbers and get a boolean

* Ex:

  ```javascript
  var raphaelIQ = 10000
  var arthurIQ = 20
  
  var isRaphaelSmarter = raphaelIQ > arthurIQ
  // isRaphaelSmarter is true
  ```


#### <= and >=

* same thing just with or equal to

* "\<=" : less than or equal to

* "\>=" : greater than or equal to

* Ex:

  ```javascript
  var speedLimit = 65
  var speed = 65
  
  var withinSpeedLimit = speed <= speedLimit
  // withinSpeedLimit is true
  ```

#### &&

* "&&" : and

* this is true if both the things on either side are true

* order of operations: happens after \>, \>=, \<, \<=

* Ex:

  ```javascript
  var hearingWeirdSounds = true
  var isDark = true
  
  var beScared = hearingWeirdSounds && isDark
  // beScared is true
  ```


#### ||

* "||" : or

* this is true if at least one of the things on either side are true

* order of operations: happens after \>, \>=, \<, \<=

* Ex:

  ```javascript
  var hearingWeirdSounds = true
  var isDark = true
  
  var maybeScared = hearingWeirdSounds || isDark
  // maybeScared is true
  ```

#### ()

* these allow you to make different operations take priority

* they work just like in math

* Ex:

  ```javascript
  var running = false
  var playingSoccer = true
  
  var notExercising = !(running || playingSoccer)
  // notExercising is false
  
  // While if we remove the parentheses
  
  var thisVariablesHasNoUsefulMeaning = !running || playingSoccer
  // thisVariablesHasNoUsefulMeaning is true
  ```

## Challenge

Make the screen a different color for every quarter of the screen