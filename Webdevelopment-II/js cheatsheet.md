# Cheat Sheet JavaScript
- [JavaScript Basics](#javascript-basics)
  - [On Page Script](#on-page-script)
  - [External JS File](#external-js-file)
  - [Function](#function)
  - [DOM Element](#dom-element)
  - [Output](#output)
- [Conditional Statements](#conditional-statements)
  - [If Statement](#if-statement)
  - [If-else Statement](#if-else-statement)
  - [Else-if Statement](#else-if-statement)
  - [Switch Statement](#switch-statement)
- [Iterative Statements (Loops)](#iterative-statements-loops)
  - [For Loop](#for-loop)
  - [While Loop](#while-loop)
  - [Do While Loop](#do-while-loop)
- [Strings](#strings)
  - [charAt method](#charat-method)
  - [concat method](#concat-method)
  - [index of method](#index-of-method)
  - [match method](#match-method)
  - [replace method](#replace-method)
  - [search method](#search-method)
  - [split method](#split-method)
  - [substring method](#substring-method)
  - [toString method](#tostring-method)
  - [Template literals](#template-literals)
- [Arrays](#arrays)
  - [variable](#variable)
  - [concat method](#concat-method)
  - [indexOf method](#indexof-method)
  - [join method](#join-method)
  - [pop method](#pop-method)
  - [delete method](#delete-method)
  - [push method](#push-method)
  - [shift method](#shift-method)
  - [unshift method](#unshift-method)
  - [reverse method](#reverse-method)
  - [sort method](#sort-method)
  - [toString method](#tostring-method-1)
  - [valueOf method](#valueof-method)
  - [slice](#slicestart_index-upto_index)
  - [splice](#splicestart_index-numberofitemstoremove-waarde1-waardex)
  - [filter](#filterelement--condition)
  - [map](#mapelement--transformation)
  - [reduce](#reduce)
  - [forEach](#foreach)
  - [find](#findelement--condition)
  - [findIndex](#findindexelement--condition)
  - [sort(advanced)](#sortcomparefunction)
- [Maps](#maps)
  - [size](#size)
  - [set(key, value)](#setkey-value)
  - [get(key)](#getkey)
  - [has(key)](#haskey)
  - [delete(key)](#deletekey)
  - [clear()](#clear)
  - [keys()](#keys)
  - [values()](#values)
  - [entries()](#entries)
  - [forEach(callbackFn)](#foreachcallbackfn)
- [Number Methods](#number-methods)
  - [toExponential method](#toexponential-method)
  - [toPrecision method](#toprecision-method)
  - [toString method](#tostring-method-2)
  - [valueOf method](#valueof-method-1)
- [Maths Methods](#maths-methods)
  - [ceil method](#ceil-method)
  - [exp method](#exp-method)
  - [log method](#log-method)
  - [pow method](#pow-method)
  - [random method](#random-method)
  - [sqrt method](#sqrt-method)
  - [Math.round(), Math.trunc(), Math.max(), Math.min()](#mathround-mathtrunc-mathmax-mathmin)
- [Dates](#dates)
  - [Creating Date objects](#creating-date-objects)
  - [Pulling Date from the Date object](#pulling-date-from-the-date-object)
  - [Pulling Day from the Date object](#pulling-day-from-the-date-object)
  - [Pulling Hours from the Date object](#pulling-hours-from-the-date-object)
  - [Pulling Minutes from the Date object](#pulling-minutes-from-the-date-object)
  - [Pulling Seconds from the Date object](#pulling-seconds-from-the-date-object)
  - [Pulling Time from the Date object](#pulling-time-from-the-date-object)
- [Mouse Events](#mouse-events)
  - [click](#click)
  - [oncontextmenu](#oncontextmenu)
  - [dblclick](#dblclick)
  - [mouseenter](#mouseenter)
  - [mouseleave](#mouseleave)
  - [mousemove](#mousemove)
- [Keyboard Events](#keyboard-events)
  - [keydown](#keydown)
  - [keypress](#keypress)
  - [keyup](#keyup)
- [Errors](#errors)
  - [try and catch](#try-and-catch)
- [Window Methods](#window-methods)
  - [alert method](#alert-method)
  - [blur method](#blur-method)
  - [setInterval](#setinterval)
  - [setTimeout](#settimeout)
  - [close](#close)
  - [confirm](#confirm)
  - [open](#open)
  - [prompt](#prompt)
  - [scrollBy](#scrollby)
  - [scrollTo](#scrollto)
  - [clearInterval](#clearinterval)
  - [clearTimeout](#cleartimeout)
  - [stop](#stop)
  - [onload](#onload)
- [Query/Get Elements](#query)
  - [querySelector](#queryselector)
  - [querySelectorAll](#queryselectorall)
  - [getElementsByTagName](#getelementsbytagname)
  - [getElementsByClassName](#getelementsbyclassname)
  - [Get Element by Id](#get-element-by-id)
- [Creating Elements](#creating-elements)
  - [createElement](#createelement)
  - [createTextNode](#createtextnode)
- [Modules](#modules)
  - [export & import](#export--import)
- [Objects](#objects)
  - [Met functies](#met-functies)
- [Functions](#functions)
  - [rest parameters](#rest-parameters)
  - [function expressions](#function-expressions)
    - [function doorgeven als parameter](#function-doorgeven-als-parameter)
  - [Arrow functions](#arrow-functions)
- [Methods](#methods)
- [Classes](#classes)
- [Extra](#extra)
  - [parseInt en parseFloat](#parseint-en-parsefloat)
  - [Operatoren](#operatoren)
  - [event.target](#eventtarget)
  - [spread syntax](#spread-syntax)
    - [Copying arrays](#copying-arrays)
    - [Merging arrays](#merging-arrays)
    - [Copying objects](#copying-objects)
    - [Merging objects](#merging-objects)
    - [Adding/overwriting properties](#addingoverwriting-properties)
    - [Pass elements of array to function](#pass-elements-of-array-to-function)
    - [Convert string to array of characters](#convert-string-to-array-of-characters)
  - [cookies](#cookies)
  - [local and session storage](#local-and-session-storage)
    - [local storage](#local-storage)
    - [session storage](#session-storage)

# JavaScript Basics
Set of JavaScript basic syntax to add, execute and write basic programming paradigms in Javascript 

* ## On Page Script
    Adding internal JavaScript to HTML

    ```js
    <script type="text/javascript"> //JS code goes here </script>
    ```

* ## External JS File
    Adding external JavaScript to HTML

    <script src="filename.js"></script>

* ## Function
    JavaScript Function syntax

    ```js
    function nameOfFunction() {
        // function body 
    }
    ```

* ## DOM Element
    Changing content of a DOM Element

    ```js
    document.getElementById("elementID").innerHTML = "Hello World!";
    ```

* ## Output
    This will print the value of a in JavaScript console

    ```js
    console.log(a);
    ```

    <a name="cond"></a>

# Conditional Statements
Conditional statements are used to perform operations based on some conditions.

* ## If Statement
    The block of code to be executed, when the condition specified is true.

    ```js
    if (condition) {
        // block of code to be executed if the condition is true
    }
    ```

* ## If-else Statement
    If the condition for the if block is false, then the else block will be executed.

    ```js
    if (condition) {
        // block of code to be executed if the condition is true
    } else {
        // block of code to be executed if the condition is false
    }
    ```

* ## Else-if Statement
    A basic if-else ladder

    ```js
    if (condition1) {
        // block of code to be executed if condition1 is true
    } else if (condition2) {
        // block of code to be executed if the condition1 is false and condition2 is true
    } else {
        // block of code to be executed if the condition1 is false and condition2 is false
    }
    ```

* ## Switch Statement
    Switch case statement in JavaScript

    ```js
    switch (expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
    }
    ```

# Iterative Statements
Iterative statement facilitates programmer to execute any block of code lines repeatedly and can be controlled as per conditions added by the programmer.

* ## For Loop
    For loop syntax in javascript

    ```js
    let text = "";
    for (let i = 0; i < 5; i++) {
        text += "Iteration number: " + i + "<br>";
    }
    console.log(text);
    ```

* ## While Loop
    Runs the code till the specified condition is true

    ```js
    let text = "";
    let i = 0;
    while (i < 5) {
        text += "Iteration number: " + i + "<br>";
        i++;
    }
    console.log(text);
    ```

* ## Do While Loop
    A do while loop is executed at least once despite the condition being true or false

    ```js
    let text = "";
    let i = 0;
    do {
        text += "Iteration number: " + i + "<br>";
        i++;
    } while (i < 5);
    console.log(text);
    ```

# Strings
The string is a sequence of characters that is used for storing and managing text data.

* ## charAt method
    Returns the character from the specified index.

    ```js
    let str = "Hello, world!";
    let char = str.charAt(3); // "l"
    ```

* ## concat method
    Joins two or more strings together.

    ```js
    let str1 = "Hello";
    let str2 = "World";
    let result = str1.concat(" ", str2); // "Hello World"
    ```

* ## index of method
    Returns the index of the first occurrence of the specified character from the string else -1 if not found.

    ```js
    let str = "Hello, world!";
    let index = str.indexOf('world'); // 7
    ```

* ## match method
    Searches a string for a match against a regular expression.

    ```js
    let str = "The chapter 1.2 is interesting.";
    let match = str.match(/chapter \d+(\.\d)*/i); // ["chapter 1.2"]
    ```

* ## replace method
    Searches a string for a match against a specified string or char and returns a new string by replacing the specified values.

    ```js
    let str = "Hello, world!";
    let newStr = str.replace("world", "there"); // "Hello, there!"
    ```

* ## search method
    Searches a string against a specified value.

    ```js
    let str = "Hello, world!";
    let position = str.search('world'); // 7
    ```

* ## split method
    Splits a string into an array consisting of substrings.

    ```js
    let str = "Hello\nWorld\nJavaScript";
    let arr = str.split('\n'); // ["Hello", "World", "JavaScript"]
    ```

* ## substring method
    Returns a substring of a string containing characters from the specified indices.

    ```js
    let str = "Hello, world!";
    let substr = str.substring(0, 5); // "Hello"
    ```

* ## toString method
    Converts another datatype to a string

    ```js
    const getal = 12;
    const b = true;
    console.log(getal.toString()); // 12;
    console.log(b.toString()); // true;
    console.log(null.toString()); // geeft een exception: Uncaught TypeError: Cannot read property 'toString' of null
    ```

* ## Template literals
    Strings die variabelen en expressies bevatten, worden omsloten door backticks

    ```js
    const a = 5;
    const b = 10;
    console.log(`Fifteen is ${a + b} and not ${2 * a + b} and not ${b}.`);
    // "Fifteen is 15 and not 20 and not 10."
    ```

# Arrays
The array is a collection of data items of the same type. In simple terms, it is a variable that contains multiple values.

* ## variable
    Containers for storing data.

    ```js
    var fruits = ["apple", "banana", "cherry"];
    ```

* ## concat method
    Joins two or more arrays together.

    ```js
    let fruits = ["apple", "banana"];
    let moreFruits = ["cherry", "date"];
    let allFruits = fruits.concat(moreFruits); // ["apple", "banana", "cherry", "date"]
    ```

* ## indexOf method
    Returns the index of the specified item from the array. lastIndexOf doet hetzelfde maar start achteraan.

    ```js
    let fruits = ["apple", "banana", "cherry"];
    let index = fruits.indexOf("banana"); // 1
    ```

* ## join method
    Converts the array elements to a string.

    ```js
    let fruits = ["apple", "banana", "cherry"];
    let fruitString = fruits.join(", "); // "apple, banana, cherry"
    ```

* ## pop method
    Deletes the last element of the array and returns this.

    ```js
    let fruits = ["apple", "banana", "cherry"];
    let lastFruit = fruits.pop(); // "cherry"
    console.log(fruits); // ["apple", "banana"]
    ```

* ## delete method
    removes item

    ```js
    let fruits = ["apple", "banana", "cherry"];
    delete fruits[1];
    console.log(fruits); // ["apple", undefined, "cherry"]
    ```

* ## push method
    Adds one or more values at the end of the array and returns new length.

    ```js
    let fruits = ["apple", "banana"];
    let newLength = fruits.push("cherry"); // 3
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```

* ## shift method
    Removes first value in array and returns it.

    ```js
    let fruits = ["apple", "banana", "cherry"];
    let firstFruit = fruits.shift(); // "apple"
    console.log(fruits); // ["banana", "cherry"]
    ```

* ## unshift method
    Adds one or more values at the beginning of the array and returns new length.

    ```js
    let fruits = ["banana", "cherry"];
    let newLength = fruits.unshift("apple"); // 3
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```

* ## reverse method
    This method reverses the order of the array elements.

    ```js
    let fruits = ["apple", "banana", "cherry"];
    fruits.reverse();
    console.log(fruits); // ["cherry", "banana", "apple"]
    ```

* ## sort method
    Sorts the array elements in a specified manner.

    ```js
    let fruits = ["cherry", "banana", "apple"];
    fruits.sort();
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```

* ## toString method
    Converts the array elements to a string.

    ```js
    let fruits = ["apple", "banana", "cherry"];
    let fruitString = fruits.toString(); // "apple,banana,cherry"
    ```

* ## valueOf method
    returns the relevant Number Object holding the value of the argument passed

    ```js
    let fruits = ["apple", "banana", "cherry"];
    let value = fruits.valueOf(); // ["apple", "banana", "cherry"]
    ```

* ## slice(start_index, upto_index)
    returnt nieuwe array als een stuk van de oorspronkelijke array met als argumenten de begin en eindpositie

    ```js
    let fruits = ["apple", "banana", "cherry", "date"];
    let slicedFruits = fruits.slice(1, 3); // ["banana", "cherry"]
    ```

* ## splice(start_index, numberOfItemsToRemove, waarde1,...,waardeX)
    verwijdert aantal items uit de array startend op start_index en voegt dan de nieuwe waarden (waarde1,...,waardeX) toe

    ```js
    let fruits = ["apple", "banana", "cherry", "date"];
    fruits.splice(1, 2, "kiwi", "mango");
    console.log(fruits); // ["apple", "kiwi", "mango", "date"]
    ```
* ## filter(element => condition)
    Filtert elementen uit een array.

    ```js
    let fruits = ["apple", "banana", "cherry", "date"];
    let result = fruits.filter(fruit => fruit.startsWith("b"));
    console.log(result); // ["banana"]
    ```

* ## map(element => transformation)
    Elk element uit de array ondergaat een transformatie, kan in bv de lengte veranderen of kan naar uppercase gaan.

    ```js
    let fruits = ["apple", "banana", "cherry", "date"];
    let result = fruits.map(fruit => fruit.toUpperCase());
    console.log(result); // ["APPLE", "BANANA", "CHERRY", "DATE"]
    ```

* ## reduce()
    Reduceert een array tot één enkele waarde door een opgegeven functie toe te passen op elk element (van links naar rechts), waarbij een accumulator wordt bijgewerkt.

    ```js
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // 10

    let fruits = ["apple", "banana", "cherry", "date"];
    let result = fruits.reduce((pv, el) => pv + el.length, 0);
    console.log(result); // 21
    ```

* ## forEach()
    Dit is een algemene methode die impliciet over een array itereert en voor elk element een callback functie aanroept.

    ```js
    let fruits = ["kiwi", "orange", "pear", "mango"];
    fruits.forEach((el, i, arr) =>
        console.log(`${el} sits in slot ${i} in an array of ${arr.length} elements`)
    );
    /*
    kiwi sits in slot 0 in an array of 4 elements
    orange sits in slot 1 in an array of 4 elements
    pear sits in slot 2 in an array of 4 elements
    mango sits in slot 3 in an array of 4 elements
    */
    ```

* ## find(element => condition)
    Zoekt het eerste element in een array dat voldoet aan de opgegeven conditie en retourneert dit element.

    ```js
    let fruits = ["apple", "banana", "cherry", "date"];
    let result = fruits.find(fruit => fruit.startsWith("c"));
    console.log(result); // "cherry"
    ```

* ## findIndex(element => condition)
    Zoekt het eerste element in een array dat voldoet aan de opgegeven conditie en retourneert de index van dit element.

    ```js
    let fruits = ["apple", "banana", "cherry", "date"];
    let index = fruits.findIndex(fruit => fruit.startsWith("d"));
    console.log(index); // 3
    ```

* ## sort(compareFunction)
    Sorteert de elementen van een array in plaats, en retourneert de array. De sorteervolgorde kan worden aangepast met een optionele compare functie.

    ```js
    let people = [
        { firstname: "John", lastname: "Doe" },
        { firstname: "Jane", lastname: "Smith" },
        { firstname: "Alice", lastname: "Johnson" }
    ];

    people.sort(({ firstname: f1 }, { firstname: f2 }) => {
        let p1Name = f1.toUpperCase();
        let p2Name = f2.toUpperCase();
        return p1Name < p2Name ? -1 : p1Name > p2Name ? 1 : 0;
    });

    console.log(people);
    // [
    //     { firstname: "Alice", lastname: "Johnson" },
    //     { firstname: "Jane", lastname: "Smith" },
    //     { firstname: "John", lastname: "Doe" }
    // ]
    ```


# Maps
A Map is a collection of key-value pairs where each key is unique. It provides an efficient way to store and retrieve data based on keys. Here are some properties and methods of the Map object:

* ## size
    Returns the number of key-value pairs in the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    console.log(myMap.size); // Output: 2
    ```

* ## set(key, value)
    Adds or updates a key-value pair in the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    myMap.set('key3', 'value3');
    console.log(myMap); // Output: Map { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
    ```

* ## get(key)
    Returns the value associated with the specified key.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    console.log(myMap.get('key1')); // Output: value1
    ```

* ## has(key)
    Returns true if the Map contains the specified key, otherwise returns false.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    console.log(myMap.has('key1')); // Output: true
    console.log(myMap.has('key2')); // Output: false
    ```

* ## delete(key)
    Removes the key-value pair associated with the specified key from the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    myMap.delete('key1');
    console.log(myMap); // Output: Map { 'key2' => 'value2' }
    ```

* ## clear()
    Removes all key-value pairs from the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    myMap.clear();
    console.log(myMap); // Output: Map {}
    ```

* ## keys()
    Returns an iterator of all keys in the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    console.log([...myMap.keys()]); // Output: [ 'key1', 'key2' ]
    ```

* ## values()
    Returns an iterator of all values in the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    console.log([...myMap.values()]); // Output: [ 'value1', 'value2' ]
    ```

* ## entries()
    Returns an iterator of all key-value pairs in the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    console.log([...myMap.entries()]); // Output: [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]
    ```

* ## forEach(callbackFn)
    Executes a provided function once for each key-value pair in the Map.

    ```javascript
    const myMap = new Map();
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    myMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    // Output:
    // key1: value1
    // key2: value2
    ```




# Number Methods
JS math and number objects provide several constant and methods to perform mathematical operations.

* ## toExponential method
    Converts a number to its exponential form.

    ```js
    let num = 12345.6789;
    let exp = num.toExponential(2); // "1.23e+4"
    ```

* ## toPrecision method
    Formats a number into a specified length.

    ```js
    let num = 12345.6789;
    let precise = num.toPrecision(6); // "12345.7"

    let num = 12345.6789;
    let fixed = num.toFixed(2); // "12345.68"
    ```

* ## toString method
    Converts an object to a string

    ```js
    let num = 12345;
    let str = num.toString(); // "12345"
    ```

* ## valueOf method
    Returns the primitive value of a number.

    ```js
    let num = new Number(12345);
    let value = num.valueOf(); // 12345
    ```

# Maths Methods
* ## ceil method
    Rounds a number upwards to the nearest integer, and returns the result

    ```js
    let x = 4.2;
    let result = Math.ceil(x); // 5
    ```

* ## exp method
    Returns the value of E^x.

    ```js
    let x = 1;
    let result = Math.exp(x); // 2.718281828459045 (approximately)
    ```

* ## log method
    Returns the logarithmic value of x.

    ```js
    let x = 10;
    let result = Math.log(x); // 2.302585092994046 (approximately)
    ```

* ## pow method
    Returns the value of x to the power y.

    ```js
    let x = 2;
    let y = 3;
    let result = Math.pow(x, y); // 8
    ```

* ## random method
    Returns a random number between 0 and 1.

    ```js
    let result = Math.random(); // e.g., 0.824432087
    ```

* ## sqrt method
    Returns the square root of a number x

    ```js
    let x = 16;
    let result = Math.sqrt(x); // 4
    ```

* ## Math.round(), Math.trunc(), Math.max(), Math.min()
    afronden, afkappen, min, max

    ```js
    console.log(Math.round(200.6)); // 201
    console.log(Math.max(200, 1000, 4)); // 1000
    console.log(Math.min(200, 1000, 4)); // 4
    ```

# Dates
Date object is used to get the year, month and day. It has methods to get and set day, month, year, hour, minute, and seconds.

* ## Creating Date objects

    ```js
    constdate = new Date(); // bevat de huidige datum/tijd
    constdate = new Date(1954,11,14,5,34,0,0); // jaar (4pos), maand (begint vanaf 0, dus waarde tussen 0 en 11),
    // dag, uren, minuten, sec, msec)
    ```

* ## Pulling Date from the Date object
    Returns the day of the month from the date object

    ```js
    let date = new Date();
    let dayOfMonth = date.getDate(); // Returns the day of the month (1-31)
    ```

* ## Pulling Day from the Date object
    Returns the day of the week from the date object

    ```js
    let date = new Date();
    let dayOfWeek = date.getDay(); // Returns the day of the week (0-6, where 0 is Sunday)
    ```

* ## Pulling Hours from the Date object
    Returns the hours from the date object

    ```js
    let date = new Date();
    let hours = date.getHours(); // Returns the hours (0-23)
    ```

* ## Pulling Minutes from the Date object
    Returns the minutes from the date object

    ```js
    let date = new Date();
    let minutes = date.getMinutes(); // Returns the minutes (0-59)
    ```

* ## Pulling Seconds from the Date object
    Returns the seconds from the date object

    ```js
    let date = new Date();
    let seconds = date.getSeconds(); // Returns the seconds (0-59)
    ```

* ## Pulling Time from the Date object
    Returns the time from the date object

    ```js
    let date = new Date();
    let time = date.getTime(); // Returns the time in milliseconds since January 1, 1970
    ```

# Mouse Events
Any change in the state of an object is referred to as an Event. With the help of JS, you can handle events, i.e., how any specific HTML tag will work when the user does something.

* ## click
    Fired when an element is clicked

    ```js
    element.addEventListener('click', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## oncontextmenu
    Fired when an element is right-clicked

    ```js
    element.addEventListener('contextmenu', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## dblclick
    Fired when an element is double-clicked

    ```js
    element.addEventListener('dblclick', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## mouseenter
    Fired when an element is entered by the mouse arrow

    ```js
    element.addEventListener('mouseenter', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## mouseleave
    Fired when an element is exited by the mouse arrow

    ```js
    element.addEventListener('mouseleave', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## mousemove
    Fired when the mouse is moved inside the element

    ```js
    element.addEventListener('mousemove', () => {
        // Code to be executed when the event is fired
    });
    ```

# Keyboard Events
* ## keydown
    Fired when the user is pressing a key on the keyboard

    ```js
    element.addEventListener('keydown', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## keypress
    Fired when the user presses the key on the keyboard

    ```js
    element.addEventListener('keypress', () => {
        // Code to be executed when the event is fired
    });
    ```

* ## keyup
    Fired when the user releases a key on the keyboard

    ```js
    element.addEventListener('keyup', () => {
        // Code to be executed when the event is fired
    });
    ```

# Errors
Errors are thrown by the compiler or interpreter whenever they find any fault in the code, and it can be of any type like syntax error, run-time error, logical error, etc. JS provides some functions to handle the errors.

* ## try and catch
    Try the code block and execute catch when err is thrown

    ```js
    try {
        // Block of code to try
        let result = riskyFunction();
        console.log("Result:", result);
    } catch (err) {
        // Block of code to handle errors
        console.error("An error occurred:", err.message);
    }

    function riskyFunction() {
        // This function might throw an error
        let random = Math.random();
        if (random > 0.5) {
            throw new Error("Something went wrong!");
        }
        return "Success!";
    }
    ```
    ```js
    try {
        const myStudent = JSON.parse('{"name":"jan","age":15}');
        console.log('MyStudent', myStudent);
        const myObject = JSON.parse('{ bad json o_O }');
        console.log('MyObject', myObject);
    } catch (err) {
        // handle the exception here
        alert(err.name); // SyntaxError
        alert(err.message); // Unexpectedtoken b in JSON at position2
    }
    ```

# Window Methods
Methods that are available from the window object

* ## alert method
    Used to alert something on the screen

    ```js
    alert()
    ```

* ## blur method
    The blur() method removes focus from the current window.

    ```js
    blur()
    ```

* ## setInterval
    Keeps executing code at a certain interval

    ```js
    setInterval(() => {
        // Code to be executed
    }, 1000);
    ```

* ## setTimeout
    Executes the code after a certain interval of time

    ```js
    setTimeout(() => {
        // Code to be executed
    }, 1000);
    ```

* ## close
    The Window. close() method closes the current window

    ```js
    window.close()
    ```

* ## confirm
    The window.confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels

    ```js
    window.confirm('Are you sure?')
    ```

* ## open
    Opens a new window

    ```js
    window.open("https://www.codewithharry.com");
    ```

* ## prompt
    Prompts the user with a text and takes a value. Second parameter is the default value

    ```js
    var name = prompt("What is your name?", "Harry");
    ```

* ## scrollBy

    ```js
    window.scrollBy(100, 0); // Scroll 100px to the right
    ```

* ## scrollTo
    Scrolls the document to the specified coordinates.

    ```js
    window.scrollTo(500, 0); // Scroll to horizontal position 500
    ```

* ## clearInterval
    Clears the setInterval. var is the value returned by setInterval call

    ```js
    clearInterval(var)
    ```

* ## clearTimeout
    Clears the setTimeout. var is the value returned by setTimeout call

    ```js
    clearTimeout(var)
    ```

* ## stop
    Stops the further resource loading

    ```js
    stop()
    ```

* ## onload
    wanneer alles geladen is
    ```js
    window.onload = function() {
        // hier kunnen we de eventhandlersinstellen
    };
    //bv:
    constmyAvatar= {
        name: 'Bob',
        points: 20,
        gender: 'male',
        hair: { color: 'black', cut: 'punk' },
        sayHi: function() {
            const title = this.gender === 'male' ? 'Sir' : 'Miss';
            return `Hi, I am ${title} ${this.name}`;
        }
    };

    const sayHiClicked = function() {
        alert(myAvatar.sayHi());
    };

    const init = function() {
        const sayHiButton = document.getElementById('sayHi');
        sayHiButton.onclick = sayHiClicked;
        };

    window.onload= init;
    ```

# Query
The browser creates a DOM (Document Object Model) whenever a web page is loaded, and with the help of HTML DOM, one can access and modify all the elements of the HTML document.

* ## querySelector
    Selector to select first matching element

    ```js
    document.querySelector('css-selectors')
    ```

* ## querySelectorAll
    A selector to select all matching elements

    ```js
    document.querySelectorAll('css-selectors', ...)
    ```

* ## getElementsByTagName
    Select elements by tag name

    ```js
    document.getElementsByTagName('element-name')
    ```

* ## getElementsByClassName
    Select elements by class name

    ```js
    document.getElementsByClassName('class-name')
    ```

* ## Get Element by Id
    Select an element by its id

    ```js
    document.getElementById('id')
    ```

# Creating Elements
Create new elements in the DOM

* ## createElement
    Create a new element

    ```js
    document.createElement('div')
    ```

* ## createTextNode
    Create a new text node

    ```js
    document.createTextNode('some text here')
    ```

# Modules
module = js-bestand, kunnen elkaar laden

* ## export & import
    Create a new element

    ```js
    //sayHi.js
    export function sayHi(user) {
        console.log(`Hello, ${user}!`);
    }

    //main.js
    import { sayHi } from './sayHi.js';

    console.log(sayHi); //function...
    sayHi('John'); // Hello, John!
    ```
    ```html
    <body>
        <script type="module" src="js/main.js"></script>
    </body>
    ```

# Objects
= verzameling van properties met key en value

```js
// een lege object literal genaamd emptyObject
const emptyObject = {};
// een object literal genaamd myAvatar
// met 4 properties
const myAvatar = {
    name: 'Bob',
    points: 20,
    gender: 'male',
    hair: { color: 'black', cut: 'punk'}
};

//of

const name = 'Bob';
const points = 20;
const gender = 'male';
const myAvatar = { name, points, gender };

//uitlezen:

//puntnotatie (liefst):
const points = myAvatar.points;
//arraynotatie
const name = myAvatar['name'];
//properties kunnen ook zo toegevoegd worden

//property verwijderen:
delete myAvatar.gender;
```
* ## Met functies:
    ```js
    const myAvatar = {
        name: 'Bob',
        points: 20,
        gender: 'male',
        hair: { color: 'black', cut: 'punk' }
    };

    function dyeHair(avatar, color) {
        avatar.hair.color = color;
        color = 'pink';
    }
    const newColor = 'Red';
    console.log('Before dyeing hair:');
    console.log(`newColor = ${newColor}`);
    console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);
    dyeHair(myAvatar, newColor);
    console.log('After dyeing hair:');
    console.log(`newColor = ${newColor}`);
    console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);
    ```

# Functions
* ## rest parameters
    laatste parameter in parameterlijst laten voorafgaan door ...

    ```js
    function g(a, b, ...otherArgs) {
        for (let value of otherArgs) {
            console.log(value);
        }
    }
    g(1, 2, 3, 'Four', 5); //3 four 5
    ```

* ## function expressions
    functie toekennen aan variabele

    ```js
    const dyeHair = function (avatar, color = 'green') {
        avatar.hair.color = color;
    }
    dyeHair(myAvatar, 'yellow');
    console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);
    ```
    * ### function doorgeven als parameter
        ```js
        const isPass = function(mark) {
            return mark >= 10;
        };
        const giveFeedback = function(mark) {
            return mark < 10 ? 'Disastrous' : mark < 12 ? 'Mediocre' : 'Verygood';
        };
        const convertMark = function(converter, number) {
            return converter(number);
        };
        console.log(convertMark(isPass, 11)); //true
        console.log(convertMark(giveFeedback, 11)); //mediocre
        ```

* ## Arrow functions
    Zijn compacter en altijd anoniem

    ```js
    const isPass = function(mark) {
        return mark >= 10;
    };
    //wordt dan:
    const isPass = mark => mark >= 10;

    //algemene syntax:
    (par1, par2, ..., parn) => {statements}
    ```

# Methods
methode van een object is een property met een functie als waarde, **geen** arrow functies gebruiken

```js
const myAvatar = {
    name: 'Bob',
    points: 20,
    gender: 'male',
    hair: { color: 'black', cut: 'punk' },
    sayHi: function() {
        const title = this.gender === 'male'? 'Sir' : 'Miss';
        return `Hi, I am ${title} ${this.name}`;
    }
};
console.log(myAvatar.sayHi());
```

# Classes
main template:
```js
class ClassName {

    (static) fields

    constructor(…){…}

    (static) methods(…){…}

    get someProp(){…}

    set someProp(value){…}

}
```
fields prrivate maken door '#' ervoor te zetten, methods, getters en setters kunnen zo ook private gemaakt worden:
```js
// public fields --> do not have to be declared first, can just declare in constructor with this.body, this.date
class BlogEntry {
    body;
    date = new Date();

    constructor(body) {
        this.body = body;
    }
}
// private fields --> always must be declared first
class BlogEntry {
    #body;
    #date = new Date();

    constructor(body) {
        this.#body = body;
    }
    get body() { return this.#entryBody; }
    set #body(value) { this.#entryBody = value || 'This entry is work in progress'; }
}
```

# Extra
* ## parseInt en parseFloat
    Zetten een string om naar getal of float.
    Leading spaces worden genegeerd, string moet starten met + of - nummer, radix is optioneel

    ```js
    console.log(parseInt('1234numbers')); // 1234
    console.log(parseInt('$1234')); // NaN
    console.log(parseInt('22.5')); // 22
    console.log(parseFloat('1234numbers')); // 1234
    console.log(parseFloat('$12.34')); // NaN
    console.log(parseFloat('22.34.15')); // 22.34
    console.log(parseFloat('22.5')); // 22.5
    ```

* ## Operatoren

    **Berekeningsoperatoren:**
    ```js 
    +, -, *, /, %, ++, --, **, unary -, unary +
    ```
    **Toewijzingsoperatoren:**
    ```js
    =, *=, /=, %=, +=, -=
    ```
    **Vergelijkingsoperatoren:**
    ```js
    ==, !=, ===, !==, >, >=, <, <=
    ```
    **Logische operatoren:**
    ```js
    &&, ||, !, ??
    ```
    **String operatoren:**
    ```js
    + en +=
    ```
    **Conditionele operatoren:**
    ```js
    condition ? ifTrue : ifFalse
    ```
* ## event.target
    bevat HTML-element waarop er geklikt werd
    ```js
    const sayHiClicked = function(event) {
        alert(myAvatar.sayHi());
        alert(`event.target: ${event.target} & id: ${event.target.id}`);
    }; //alert: event.target: [object HTMLInputElement] & id: sayHi
    ```
* ## spread syntax
    The spread syntax (`...`) allows an iterable (like an array or a string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It can also be used for object literals, where it can spread the properties of one object into another.

    * ### Copying arrays
        ```js
        const originalArray = [1, 2, 3];
        const copyArray = [...originalArray];
        console.log(copyArray); // [1, 2, 3]
        ```

    * ### merging arrays
        ```js
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const mergedArray = [...array1, ...array2];
        console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
        ```

    * ### copying objects
        ```js
        const originalObject = { a: 1, b: 2 };
        const copyObject = { ...originalObject };
        console.log(copyObject); // { a: 1, b: 2 }
        ```

    * ### merging objects
        ```js
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const mergedObject = { ...obj1, ...obj2 };
        console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }
        ```

    * ### adding/overwriting properties
        ```js
        const originalObject = { a: 1, b: 2 };
        const newObject = { ...originalObject, b: 3, c: 4 };
        console.log(newObject); // { a: 1, b: 3, c: 4 }
        ```

    * ### pass elements of array to function
        ```js
        function sum(x, y, z) {
        return x + y + z;
        }

        const numbers = [1, 2, 3];
        console.log(sum(...numbers)); // 6
        ```

    * ### convert string to array of characters
        ```js
        const string = "hello";
        const charArray = [...string];
        console.log(charArray); // ['h', 'e', 'l', 'l', 'o']
        ```
* ## cookies
    ```js
    // In JavaScript wordt een cookie als volgt gecreëerd
    document.cookie = 'username=John Doe';

    // Je kan ook een datum toevoegen wanneer een cookie moet verstrijken. Een cookie wordt by default verwijderd als de browser wordt gesloten. Dit kan je ook zien.
    document.cookie = 'adblock_status=noactive; expires=Thu, 18 Jul 2019 12:00:00 UTC';

    // Met de parameter path, kan je het path opgeven waartoe de cookie behoort.
    // Het path bepaalt op welke pagina's de cookie overal beschikbaar is
    // By default, behoort de cookie tot de huidige webpagina
    // Met path=/ kan de cookie voor de ganse website gelezen worden
    document.cookie = 'language=NL; expires=Thu, 18 Jul 2019 12:00:00 UTC; path=/';

    // Een cookie veranderen kan als volgt
    document.cookie = 'language=FR; expires=Thu, 18 Jul 2019 12:00:00 UTC; path=/';

    // Een cookie verwijderen, kan door de expires date vóór nu te plaatsen
    // document.cookie = 'language=FR; expires=Thu, 18 Dec 2018 12:00:00 UTC; path=/';

    // Alle cookies lezen
    const c = document.cookie;
    console.log(c);
    // username=John Doe; adblock_status=noactive; language=FR

    c.split("; ").forEach((part) => {
    const arrPart = part.split("=");
    console.log(`${arrPart[0]} --> ${arrPart[1]}`);
    })
    // username --> John Doe
    // adblock_status --> noactive
    // language --> FR
    ```
* ## Local and Session Storage
    Local Storage and Session Storage are two web storage options available in modern web browsers. They provide a way to store data on the client-side, allowing web applications to persist data even after the user closes the browser or refreshes the page.

    voorbeeld sticky notes:
    ```js
    #storage;
    constructor(storage) {
        this.#storage = storage;
    }
    get storage() {
        return this.#storage;
    }
    addSticky(note) {
        const key = 'sticky_' + Math.random().toString(36).substring(2);
        //unieke sleutel
        this.#storage.setItem(key, note);
    }
    toHTML() {
        const allStickies = Object.entries(this.#storage).reduce(
            (result, [key, value]) => (result + `${key}: ${value}\n`),
            ''
        );
        alert(allStickies);
    }
    ```

    * ### Local Storage
        Local Storage is a persistent storage mechanism that allows you to store key-value pairs in the browser. The data stored in Local Storage remains available even after the browser is closed and reopened. Here's an example of how to use Local Storage:

        ```javascript
        // Storing data in Local Storage
        localStorage.setItem('username', 'JohnDoe');
        localStorage.setItem('isLoggedIn', true);

        // Retrieving data from Local Storage
        const username = localStorage.getItem('username');
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        console.log(username); // Output: JohnDoe
        console.log(isLoggedIn); // Output: true

        // Removing data from Local Storage
        localStorage.removeItem('isLoggedIn');

        // Clearing all data from Local Storage
        localStorage.clear();
        ```

    * ### Session Storage
        Session Storage is similar to Local Storage, but the data stored in Session Storage is only available for the duration of the browser session. Once the browser is closed, the data is cleared. Here's an example of how to use Session Storage:

        ```javascript
        // Storing data in Session Storage
        sessionStorage.setItem('theme', 'dark');
        sessionStorage.setItem('language', 'en');

        // Retrieving data from Session Storage
        const theme = sessionStorage.getItem('theme');
        const language = sessionStorage.getItem('language');

        console.log(theme); // Output: dark
        console.log(language); // Output: en

        // Removing data from Session Storage
        sessionStorage.removeItem('language');

        // Clearing all data from Session Storage
        sessionStorage.clear();
        ```

* ## JSON
    ```json
    {
    "className":"Class 2B",
    "year":2022,
    "phoneNumber":null,
    "active":true,
    "homeroomTeacher":{"firstName":"Richard", "lastName":"Roe"},
    "members":[{
        "firstName":"Jane","lastName":"Doe"},
        {"firstName":"Jinny","lastName":"Roe"},
        {"firstName":"Johnny","lastName":"Roe"},
        ]
    }
    ```
    * The first line “className”:”Class 2B” is a string.
    * The second pair “year”:2022 has a numeric value.
    * The third pair “phoneNumber”:null represents a null – there is no value.
    * The fourth pair “active”:true is a boolean expression.
    * The fifth line “homeroomTeacher”:{“firstName”:”Richard”, “lastName”:”Roe”} represents an object literal.
    * Lastly, the script from the sixth line onwards is an array.

    ```js
    const data;
    // Object in storage plaatsen
    function saveData() {
        sessionStorage.setItem("myStorageKey“, JSON.stringify(data));
    }
    // Object ophalen uit storage
    function loadData() {
        data = JSON.parse(sessionStorage.getItem("myStorageKey"))
    }
    ```
    vb class Sticky:
    ```js
    class Sticky {
    #id; #note; #color;
        constructor(note, color) {
            this.#id = 'sticky_' + Math.random().toString(36).substring(2);
            this.note = note;
            this.color = color;
        }

        get id() {return this.#id;}
        get note() {return this.#note;}
        get color() {return this.#color;}
        set note(value) {this.#note = value;}
        set color(value) {this.#color = value;}

        toJSON() {
            return {
                id: this.id,
                note: this.note,
                color: this.color,
                };
            }
        
        addSticky(note, color) {
            const sticky = new Sticky(note, color);
            this.#storage.setItem(sticky.id, JSON.stringify(sticky));
        }

        toHTML() {
            const allStickies = Object.entries(this.#storage).reduce(
                (result, [key, value]) => {
                    // converteert JSON string naar object literal
                    const storObj = JSON.parse(value);
                    // converteert object literal naar object van class Sticky
                    const sticky = new Sticky(storObj.note, storObj.color);
                    return (result += `${key} : ${sticky.note} \n`);
                },'');
                alert(allStickies);
            }
    }
    ```
