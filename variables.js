//variables in js 
var name='saad'
let age = 20
const pno = 9288282822

console.log(name,age,pno)

function myfuc(){
    console.log("var can be accesible outside from function scope",name)
    
    console.log(age)
    console.log(pno)
}

myfuc()

//datatype in js 
//datatype is dynamic no need to declare data type like c - int no=12
let no ="saad"
console.log(no)

//typeof se typeof datatype pata chalta hai

console.log(typeof(no))
//datatype can be changed at run type 
//2 types primitive and non primitive

no =12
console.log(no)

console.log(typeof(no))

console.log("--------string to number and vice verse-------")

console.log("number conversion :")

let tail = "2"
console.log(typeof(tail) + " " +tail)
tail=Number(tail)
console.log(typeof(tail) + " " +tail)

let naam ="aam"
console.log(typeof(naam) + " " +naam)
naam=Number(naam)
console.log(typeof(naam) + " " +naam)

console.log("--string conversion--")
naam=String(naam)
console.log(typeof(naam) + "" + naam)

//more conversions useing parse int parsefloat

console.log("-----------\n")

let num ="12.9000111abcd34efjj"

console.log(Number(num)) //NaN
console.log(parseInt(num)) //12 (it stops when first character of nan is found traverse from left-right )
console.log(parseFloat(num)) //12.90000111


