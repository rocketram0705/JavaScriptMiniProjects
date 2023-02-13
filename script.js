//variable is a container for storing data .
//let,const,var are keywords to state a variable 
// first is to declare a variable. 
let message ; // variable declaration 
// variable assignment is done below
message = 'hello'; // this string value is stored in the memory area associated with variable name 

// above string value can be accessed using this variable name , for example see below
console.log("the message is :"+ message); // variable name is combined with string using concatenation operator 


// we can also copy a data stored in one variable in another variable 
let messageTwo;
messageTwo=message;
console.log("the copy of message is :" +messageTwo);

// declaring a variable twice will raise an error
/*
let message = "hello ram "; // this will raise a syntax error that says "redeclaration of let variable name";
*/

// variable can only contain letters , digits and symbols ( _ and $ ).
// variable cannot start with digit....
// variable are case sensitive .. for instance , apple is different from Apple ;

// DATA TYPES

// There totally eight data types , seven are primitive types and one is combined (namely, Object)
// we can put data of any type in a variable 
// primitive data type can have only one type of data at one moment..
let n = 12;
console.log("the integer value stored in n variable: "+n);
n = 12.45;
console.log("the float values stored in a n variable :"+n);

// other values belongs to number data types are infinity and NaN..
// to check the datatype of variable we can use "typeof" method..
// infinity 
console.log(1/0);
let infinityValue= 1/0;
console.log(typeof infinityValue);

// NaN --> Not a Number is a computational error. it is result of incorrect or undefined mathematical operation ;
// for example if we try to multiply a string with a number. this will raise NaN computational error..
console.log("Not a number"* 3);// scenario where string and a number used in mathematical operation.

let number;
let resultOfMultiplicationOfUndefinedValueAndNumber = number * 2;// scenario where undefined value and number multiplied...
console.log(resultOfMultiplicationOfUndefinedValueAndNumber);

//BigInt 
let bigIntegerValueDenotion = 9540584035034880504n; // n is used at the end to specify, data is a type of bigint...

// String 

let stringValue = "hello";
// embedded variables

let embeddedVariablesDemo = "Ram";

console.log(`the variables can be embedded to any thing using \$\{\}: ${embeddedVariablesDemo}`); //back tick is used when we embed another variable to a string or anything else....

//Boolean

let isTrue = 343> 432432;
console.log(isTrue);


// other data types are "null" and "undefined"

let undefinedValueDemo;
console.log(typeof undefinedValueDemo);// outputs "undefined"

let nullValueDemo = null;
console.log(typeof nullValueDemo);// represents a value unknown
// Excercise 
let nameOfMine = 'She Hulk'; 

console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name"}`); // hello name is the output 
console.log(`hello ${nameOfMine}`); // hello She Hulk

// Type Conversions

// automatically type conversion happens in javascript, however we explicitly type convert one data type value to another data type value 

// example of automatic type conversion 

// alert ("3"+ "4");// first converts string to numbers to perform mathematical operations, then converts result to string inorder to display the result in model( model is known as alert or promt or confirm box)
// above alert is function that only display string values in web page so it type cast any data type of value to string..


let outputOfStringMultiplybyStringTypeConversionDemo = "444" * "33323"; // + operator doesnot convert the type automatically , intersing thing !!!..
console.log(outputOfStringMultiplybyStringTypeConversionDemo);
console.log(typeof outputOfStringMultiplybyStringTypeConversionDemo );

// if a string is not valid number then result will be NaN
console.log(Number("jfdjfldsj")); // outputs NaN
let undefinedValueTypeConversionDemo;
console.log(Number(undefinedValueTypeConversionDemo));// ouput is NaN

// type conversion of null into Number results in "0".
let typeConversionOfNullValue = null;
typeConversionOfNullValue = Number(typeConversionOfNullValue);
console.log ("type conversion of null values results in \" 0\" : "+ typeConversionOfNullValue);

// type conversion to boolean
let hello;
let exampleOfNull= null;
console.log("the covertion of \"hello\" to boolean: "+Boolean("hello")); // output is true
console.log("the covertion of \"1\" to boolean: "+Boolean(1)); // output is true
console.log("the covertion of \"0\" to boolean: "+Boolean(0)); // output is false
console.log("the covertion of undefined variable\"hello\" to boolean: "+Boolean(hello)); // output is false
console.log("the covertion of \"\" to boolean: "+Boolean("")); // output is false
console.log("the covertion of \"2\" to boolean: "+Boolean(2)); // output is true
console.log("the covertion of string\"0\" to boolean: "+Boolean("0")); // output is  true
console.log("the covertion of null variable \"exampleOfNull\" to boolean: "+Boolean(exampleOfNull)); // output is false
