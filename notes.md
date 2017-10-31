

# Functional Programming

## Basic Function Syntax
A function is simple a block of code we give a name to, in this example *printDetails*
```javascript
function printDetails(){
    console.log("printing some details")
}
```
## Calling Functions
To run the code in a function we simply write the function name and some parentheses.
```javascript
function printDetails(){
    console.log("printing some details")
}
printDetails(); //runs the function 
```
## Function Arguments and Parameters
Arguments allow us to pass data into a function. In this example
* "Jane" is an argument
* *name* is a parameter
```javascript
function printDetails(name){
    console.log("name:"+name)
}
printDetails("Jane") //outputs name:Jane
```

### Multiple Arguments
We can specify multiple arguments by separating them with a comma
```javascript
function printDetails(name, course){
    console.log("name:"+name)
    console.log("course:"+course)
}
printDetails("Jane", "ICT")
```

### Different Data Types
It's not just numbers and strings that can be arguments. We can pass any data type. This example passes an array as an argument. 
```javascript
function printNames(namesArr){
    for(var i=0;i<namesArr.length;i++)
    {
        console.log(namesArr[i])
    }
}
var allStudents=["Jane","Imran","Zofia"]
printNames(allStudents); 
//Jane
//Imran
//Zofia
```

This example uses an object.
```javascript
function printStudent(student){
    console.log("name:"+student.name);
    console.log("course:"+student.course);
    console.log("mark:"+student.mark);
}
var someStudent={name:"Jane",course:"ICT", mark:67}
printStudent(someStudent);
```
This example uses an array of objects
```javascript
function printStudents(studentsArr){
    for(var i=0;i<studentsArr.length;i++)
    {
        console.log("name:"+studentsArr[i].name);
        console.log("course:"+studentsArr[i].course);
        console.log("mark:"+studentsArr[i].mark);
    }
    
}

var students=[]
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});
printStudents(students); //prints each students details in turn
```

## Returning Values
Functions can *return* (send data back) values. Here's an example:
```javascript
function hasPassed(mark){
    if(mark<40)
    {
        return false;
    }
    return true;
}
console.log(hasPassed(50)) //outputs true
```
Here's another example
```javascript
function square(num){
    return num*num;
}
console.log(square(4)) //outputs 16

```
Again,we can work with any data type e.g. Arrays
```javascript
function longNames(namesArr){
    var matches=[]
    for(var i=0;i<namesArr.length;i++)
    {
        if(namesArr[i].length>4)
        {
            matches.push(namesArr[i])
        }
    }
    return matches
} 

var allStudents=["Jane","Imran","Zofia"]
console.log(longNames(allStudents)); //["Imran", "Zofia"]
```
Or objects
```javascript
function getPassingStudents(studentsArr){
    var matches=[];
    for(var i=0;i<studentsArr.length;i++)
    {
        if(studentsArr[i].mark>=40)
        {
            matches.push(studentsArr[i])
        }
    }
    return matches;
}

var students=[]
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Pete",course:"BACB", mark:38});
students.push({name:"Zofia",course:"BAIM", mark:72});
console.log(getPassingStudents(students)); //returns everyone apart from Pete
```
## Variable Scope
Where a variable is initialised determines it's *scope* (which code can see and use the variable).
* A variable declared outside a function is a global variable it can be 'seen' by all our code. In this (pointless) example *num1* is a global variable. 
* A variable declared inside a function (including parameters) is a local variable. It is only accessibe to code inside the function. In the example *num2* is a local variable. 
* It is important to note that we should always use the *var* keyword when creating the variable. If we don't, the variable will be global regardless of where is has been declared.
 
```javascript
var num1=10;

function test(){
    var num2=num1-5;
    console.log(num1); //10
    console.log(num2); //5
}

test();
console.log(num1); //10
console.log(num2); //num2 is not defined
```

### Nested Functions
It is common practice in JavaScript to create nested functions. A nested function can see all the scopes it is contained within. In this example the *printMsg* function can access *num1*, *num2* and *total*. 

```javascript
var num1=10;

function addANumber(num2){
    var total=num1+num2
    function printMsg()
    {
        console.log(num1+" + "+num2+" = "+total); 
    }
    printMsg(); //10+5 =15
}

addANumber(5);
```

## Using Functions
### Functions Make Code More Efficient

Any time we have a programming task we would like to perform more than once can be defined as a function. It makes our code more efficient. 

```javascript
function printDetails(name, course, mark){
    console.log("name:"+name)
    console.log("course:"+course)
    console.log("mark:"+mark)
}
printDetails("Jane", "ICT", 67);
printDetails("Imran", "BACB", 42);
printDetails("Zofia", "BAIM", 72);
```

### Functions can help us to abstract
In programming, abstraction is about hiding complex details and providing a simple interface that programmer can use. Here's a really basic example. You should be familiar with the following JavaScript code that selects a single HTML element.

```javascript
var aDivElement = document.querySelector('#myDiv');
```

The (fairly minor) problem with this is typing *document.querySelector* is a bit tedious. A simple function can make this easier for use.

```javascript
function choose(selector)
{
    return document.querySelector(selector);
}
var aDivElement = choose('#myDiv');
```


## Error handling and functions
In the previous examples we have assumed that the function will be called with the correct argument types e.g. we pass *hasPassed* a number. Often functions will form part of a larger code base and several different programmers will be using them. What happens if a user calls a function with the wrong type of argument e.g. *hasPassed('qwerty')*. Consider the following simple example. We get some strange results if the user doesn't pass a string as an argument. 

```javascript
function getWelcomeMessage(userName){
    return "Welcome "+userName;   
}
console.log(getWelcomeMessage("Zofia")); //Welcome Zofia
console.log(getWelcomeMessage(["Zofia","BAIM",72])); //Welcome Zofia,BAIM,72
console.log(getWelcomeMessage({name:"Zofia",course:"BAIM", mark:72})); //Welcome [object Object]
```

One approach is to test for the correct data type and then return a special value e.g. *undefined* if the incorrect datatype is used. 

```javascript
function getWelcomeMessage(userName){
    if(typeof userName==='string' || userName instanceof String)
    {
        return "Welcome "+userName;   
    }else{
       return undefined;
    }
}

console.log(getWelcomeMessage("Zofia")); // Welcome Zofia 
console.log(getWelcomeMessage(["Zofia","BAIM",72])); // undefined
console.log(getWelcomeMessage({name:"Zofia",course:"BAIM", mark:72})); // undefined
```

We can then test the returned value to see if we have been successful

```javascript
var msg=getWelcomeMessage(["Zofia","BAIM",72])
if(msg!==undefined){
 console.log(msg);   
}
```
### Throwing Errors (Exception Handling)
We can extend this approach to error handling by using the *throw* operator. We can use the *throw* operator when something happens that we don't expect, an exception. In the following example we expect a programmer calling the *choose* function to provide a valid CSS selector. If they don't, the error will be thrown, the error message will appear in the *console.log* and the program execution will stop. 

```javascript
function choose(selector)
{
    var elem=document.querySelector(selector);
    if(elem)
    {
        return elem;
        
    }
    throw new Error("Can't find a DOM element for selector: "+selector);
}
var aDivElement = choose('#nav-bar');
console.log(aDivElement);

```

Sometimes we don't want to stop program execution. In which case we can catch the error and then decide what to do. In the following example we have a *try...catch* block. We try and do the thing that might go wrong (selecting part of the page). If it does go wrong we catch the error and output it to the console. 

```javascript

function choose(selector)
{
    var elem=document.querySelector(selector);
    if(elem)
    {
        return elem;
        
    }
    throw new Error("Can't find a DOM element for selector"+selector);
}
try
{
    var aDivElement = choose('#mDiv');
    console.log(aDivElement);
}
catch(error)
{
    console.log(error);
}


```

Knowing when to throw errors is not always obvious. In many cases simply returning an *undefined* value from a function will be fine. However, if   we have a function that is part of a library that we be will used in many different applications, and potentially other programmers will be calling the function, it might make sense to throw errors for unexpected problems. 

## Pure Functions 
A pure function is one that has no dependencies and no side effects. As such it is a self-contained unit. A pure function always returns a value. Here's an example of a pure function

```javascript
function multiplyTwoNums(num1,num2)
{
    return num1+num2;
}
console.log(multiplyTwoNums(5,7))
```
Here's the same function but written with side effects. In this case the side effect is changing the *console.log*. 

```javascript
function multiplyTwoNums(num1,num2)
{
    console.log(num1+num2);
}
multiplyTwoNums(5,7);
```
When possible we should strive to create pure functions. They are much easier to test, maintain and re-use. For example, if I want to display the result in a *div* element instead of a console log, I don't have to change any of the code inside the pure function. The same isn't true of the second example. 

In an ideal world all functions would be pure. This isn't realistic, especially in JavaScript where so much of our code is about DOM manipulation, but where possible creating pure functions is considered good programming practice. 

## References
* http://eloquentjavascript.net/03_functions.html 
* https://www.nczonline.net/blog/2009/03/03/the-art-of-throwing-javascript-errors/ 




