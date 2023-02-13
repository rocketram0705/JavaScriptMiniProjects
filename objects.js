// Object is used to store multiple datatype values as key value pairs. key is property name and value is anyvalue.

// Object can be created using two syntaxes 
// 1. first type is called object literal 
let person = {personName:'ram',height:'5.4 ft',weight:'75 kgs',color:'black',age:29,};

// 2. second is declaring using new keyword and Object constructor
let car = new Object();

// values can be accessed using .(notation) followed by key name.

console.log(person.weight);

console.log("The Age of a person stored in object is :"+person.age);

// adding key value pair to Object declared using new keyword.

car.brand = "Toyata";
car.fuelType ="Petrol";
car.engineCapacity = "1000cc";

console.log(`The engine capacity of ${car.brand}  is :`+car.engineCapacity);

// to delete property from an Object "delete" operator

delete person.color;

console.log(person.color); // if we tried to access a property that was deleted wiil returned value undefined

// we can also define multiword property but they must be enclosed within double quotes.

let countryDetails= {"Country Name":"India", "National Bird":"Peacok","National Animal":"Tiger","National Anthem":"Jana Gana Mana"};

// how to access propeties with multiword because dot notation cannot be used values to fetch the property values that has mutiword key.

// console.log(countryDetails.National Animal); // missing ) after  list argument error will raise.
// so we have to use [] notation to access multiword properties.

console.log(countryDetails["National Animal"]);

// if a property name is passed at run time , that time we can use square bracket to access the value of property name or key has like following,

let userInput = "National Anthem";
let countryName = "Country Name";
console.log(`${countryDetails[countryName]} \'s National Anthem is:`+countryDetails[userInput]);

//apart from course content to test whether i can memic what was done in real project
function addSpecialEffect(vObj,action){
   //let imageSource = vObj.childNodes[0].childNodes[0].src;
   let imageSource = vObj.children[0].children[0].src;
    if(action=="in"){
        vObj.children[0].style.background = "#4285f4";
        imageSource = imageSource.replace('_b.png','_w.png');
        vObj.children[0].children[0].src=imageSource;
        vObj.children[0].children[1].style.color="#fff";
    }
    else{
        vObj.children[0].style.background = "#cee7ce";
        imageSource = imageSource.replace('_w.png','_b.png');
        vObj.children[0].children[0].src=imageSource;
        vObj.children[0].children[1].style.color="#000000";
    }
}
//window.vObj = vObj

// objects continuation
// computed properties , we can use square brackets in object literal when creating objects.

let fruit = "apple";
let grocery = {[fruit]:5,candies:6,};
console.log(grocery.apple);

// using square brackets , we can write complex expression 

let company ="Dell";
let computers = {[company +"computer"]:8};
console.log(computers["Dellcomputer"]);

// in real projects , existing variables are used as values for example 

function makeUser(name,age){
   return {
    name: name,
    age: age,
    }
}

let user = makeUser("ram naresh",29);
console.log("the values stored in user object:"+user.name +" "+user.age);
// above is function that accepts parameters and make them as objects 
// we can shorthand this by making
//
function storeMovie(movieName,runTime){
    return {
        movieName,
        runTime,
    }
}

let movieInfo = storeMovie("Anniyan",2.30);
console.log("the movie name is: "+movieInfo.movieName+" and it's run time is: "+movieInfo.runTime);

// test whether a property exist in object 
// "in" key word used to 
console.log("movieName" in movieInfo); // result in "true"
console.log("actor" in movieInfo); // result in "false"

// for in method use loop over objects

for (const key in movieInfo) {
    console.log("output is: "+movieInfo[key]);
}

function isEmpty(obj){
    for (const key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(movieInfo));
//let emptyObject = new Object();
let emptyObject={};
console.log(isEmpty(emptyObject));

let salaries = {Jhon:130,Sam:100,Jake:160,};

function getTotalSalary(obj){
    let sum=0;
    for (let key in obj){
        sum = sum + obj[key];
    }
    return sum;
}
let noSalaries = {};
console.log("the total salary of employees :" +getTotalSalary(salaries));

console.log("the total no salary of employees :" +getTotalSalary(noSalaries));

//  objects are not directly stored in variable , instead object is stored in memory address and reference to it assigned to the variable .
// for example 
let demoForObjectReference = {name:"ram",};
// this object is stored in memory address and reference to it stored in variable "demoForObjectReference"..
// knowing this concept is crucial because when we copy an object to another , only a second reference is created and this reference stores the address of same object reside in the memory, no duplicate is created.
console.log("before modification: "+demoForObjectReference.name)
// for example 
let duplicationOfDemoForObjectReference ={};
duplicationOfDemoForObjectReference = demoForObjectReference;
// now both variable are pointed to same memory address of the object .
// so we can both variable name to access the contents of the object and modify the same.

/*duplicationOfDemoForObjectReference.name="rajesh";
console.log("after modification: "+demoForObjectReference.name);*/

// cloning and Object.assign
// to duplicate an object , we can replicate the properties by iterating the current object properties on primitive level
let cloningObjectOfDemoForObjectReference = {};

for (let key in demoForObjectReference){
    cloningObjectOfDemoForObjectReference[key]=demoForObjectReference[key];
}
console.log(cloningObjectOfDemoForObjectReference);
// we can change the property value of duplicated object without affecting the original object's property values.
cloningObjectOfDemoForObjectReference.name = "rajesh";
console.log("the content of duplicated object- "+cloningObjectOfDemoForObjectReference.name);

// we can also use Object.assign method to clone an object.. 
let sourceFirstObject={first:"one",Apple:"fruit",};
let sourceObjectTwo={second:"second",Banana:"fruit",};
let newObjectforAssignment={};
Object.assign(newObjectforAssignment,sourceFirstObject,sourceObjectTwo,demoForObjectReference,cloningObjectOfDemoForObjectReference);
console.log(newObjectforAssignment);

// structured cloning or deepcloning is used to avoid nested cloning problem of copying properties values that has objects .
let objectThatIsCloned ={
    name:"ram",
    physic:{
        height:"5.8 ft",
        weight:"64 kgs",
    }
}
let structuredClonedObject = structuredClone(objectThatIsCloned);
structuredClonedObject.physic.weight="50 kgs";
console.log("the propeties values of two objects are same"+sourceFirstObject.physic===objectThatIsCloned);

// object's methods
// function created with in object is called method 
// for example 
let objectWithMethods = {name:"ram",
age:29,
showInfo(){
console.log("hello world");
}}
objectWithMethods.showInfo();
// we can also add seperately created function to an object
function outsideFunctionExample(){
    console.log("this is outside function");
}
objectWithMethods.newMethod = outsideFunctionExample;
objectWithMethods.newMethod();
// obviouly method takes parameters that mentions as properties inside object
// for example 
let demoForObjectMethodsWithParameter={
    team:"India",
    captain:"Rohit",
    showTeamInfo(team,captain) { // this won't work
        console.log("team name: "+team+"captain name:"+captain);
    }
}
demoForObjectMethodsWithParameter.showTeamInfo();
// above piece of code won't work to access the contents of object . instead we can use this keyword to access 
// learning this keyword
//1. this keyword represents the object before the propety name
let demoForThisKeyword= {
    apple:"red",
    banana:"yellow",
    getColors(){
        console.log(this.apple +"  "+this.banana);
    },
    showColor(){
        console.log(demoForThisKeyword.apple,demoForThisKeyword.banana);// works but not recognized as good practice
    }
    
}
demoForThisKeyword.getColors();
demoForThisKeyword.showColor();
function addUser(){
    return {
        name:"rocket",
        ref:this,
    }
}
let exampleObject = addUser();
console.log("the output is"+exampleObject.ref.name);// an error expected but result is empty string...

//excercise 

let calculator ={
    
    read(){
       this.num1 = prompt("enter the num1 :",1);
        this.num2 = prompt("enter the num2: ",2);
        this.sum();
        this.multiply();
    },
    sum(){
        console.log(this.num1 + this.num2);
    },
    multiply(){
        console.log(this.num1*this.num2);
        }
}
//calculator.read();

// constructor function and "new" operator 
// we need to make many similar object like user, menu item and so on in real project . for thar we can use the constructor function
// constructor function has two conventions 
//1. name of function has to start with capitalLetter 
// 2. they have to executed using "new" operator
// defining constructor function 
function MakeUser(name,age,parentName){
    this.name= name;
    this.age=age;
    this.parentName=parentName;
}
// creating object using constructor function 
let userDetail = new MakeUser("ram",29,"Devendran");
console.log(userDetail);





