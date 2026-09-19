//functions in jsx

function myfunc(a,b){
    return a+b;

}

function greet(name){
    console.log("hello " + name + ",welcome to our page")
}

name="sunaina"

greet(name)

console.log(myfunc(1,2))

//function as a variable

let myvar = function suno()
{
    console.log("yesss")
}
myvar()

//this is anonymous function
let myvar2 = function ()
{
    console.log("yesss")
}
myvar2()

//this is function expression
let myvar3 = function naamval()
{
    console.log("yesss")
}
myvar3()
// IIFE - immediately invoked function expression

//this is fat arrow function

let yefunc = () => console.log("this is big fat arrow function");

yefunc()

 