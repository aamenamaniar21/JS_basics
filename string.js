//string interpolation in js using `` backticks

//normal sting

var no = 5

function str1(){
    for (let i = 1; i <=10; i++) {
    // this is how normally you do
     console.log(no+ "x" + i + "=" +(no *i));
   
        
    }
}

//now with sting interpolation

function str2(){
    for (let i = 1; i <=10; i++) {
    // this is how normally you do
    console.log(`\n ${no} x ${i} = ${no*i}`);
    
        
    }
}

 

str1()
str2()
 