## Week 0

It was about basic revision of html and css, basically a warm-up before diving into js.

## Week 1

This is where things started actually

1. Orientation class
2. How to solve assignments
3. JS Foundations revision
4. Basic JS apis (methods)
5. Loops
6. Callbacks etc.
7. Async programming, Promises

## Browsers working

Browser is a software that renders html, css and js.
Browsers can only understand these 3.

## Why languages

Because computers cant understand english thats why

## Compilation

Process of converting code to machine code. This process involves 2 steps.

1. Lexical analysis: Converting code to short tokens, called tokenization process.
2. Syntactic analysis: Converting tokens to abstract syntax tree.

## Interpretation

Code gets executed line by line. Interpretation is faster than compilation since each line is execeuted one by one

## Static vs. Dynamic Languages

Tightly or loosely typed languages are static or dynamic languages, meaning that they have a strict or flexible type system.

Dynamic languages like js, python etc does not explicitely ask to specify the datatype that is being used.

Static languages ask for datatype

ex:

```cpp

// static language c++
int variableName = 10;
float floatValue = 3.14;
bool booleanValue = true;
```

```js
let data = "Hello World!";
const newData = 123;
```

## Nature of Javascript

JS is single threaded in nature, meaning that it can only execute one task at a time. This is why javascript is slow as well.

## Javascript APIs / Methods for beginners

- For strings and arrays:
  length, indexof(), lastindexof(), slice(), replace(), split(), trim(), splice(), uppercase(), lowercase(), includes(), Number(), parseInt(), parseFloat() and more.

- For arrays:
  push(), pop(), shift(), unshift(), concat(), join(), flat(), sort(), reverse() and more.

forEach(), map(), filter(), reduce() are higher order loop methods that are provided by the js for arrays and strings.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});
```

## Callbacks

A function that can be called again in the future, usually these functions are taken as arguments, and passed to other functions.

This allows for greater control over the flow of execution and enables asynchronous operations.

### How callback functions work:
Passing the Callback: You define a function that you want to be called back later and pass it as an argument to another function.

Storing the Callback: The receiving function stores the callback function for later use.

Triggering the Callback: When a specific event occurs or a certain condition is met, the receiving function invokes the callback function, passing it any necessary data.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArrayCB (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// this function takes a callback as an argument
function printArray (cb) {
  cb(arr);
}

printArray(printArrayCB);

const arr = [1,3,4,5,8,9];

arr.forEach((item) => {
    console.log(item);
})

```

## JSON related
JSON.parse(string) -> JSON
JSON.stringify(object) -> String