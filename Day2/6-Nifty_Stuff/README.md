# Nifty Stuff - Notes

#### Functions

* They allow you to write code once and reuse it many times

* Ex:

  ```javascript
  function printIQ(name, IQ){
      print(name + " has an IQ of " + IQ)
  }
  ```

* Let's break it down

  * function: that just tells the computer we're making a function, like var
  * printIQ: the function's name, just like when making a variable
  * (name, IQ): what you give the function, just normal variables named: name and IQ
  * "{": where the function contents starts
    * print(name + " has an IQ of " + IQ): function content
  * "}": where the function contents ends

* This allows you to just do

  ```javascript
  printIQ("Arthur", 2)
  // and it would print
  // Arthur has an IQ of 2
  ```

* You can put many lines of code in a function which allow to make something once and reuse it many times instead

* This allows you not to copy paste code and change something in that one function and have it change how things work everywhere it is used

* Parameters can change how the function works or what it does

* Returns like keyIsDown(LEFT_ARROW)

## Challenge

Add a scale parameter to the drawSmileyFace function so that you can pick how big it is