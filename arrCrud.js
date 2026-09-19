//push 

arr = ["mango","apple"]

arr.push("banana")
console.log(arr)

//this ;push method returns the new length of array see :

console.log(arr.push("orange"));

//pop

arr.pop()
//gives the element you pushed
console.log(arr.pop());

// unshift is used to push element at start which is at first index

arr.unshift("mango")
console.log(arr);


//shift is used to remove the fisrt element

arr.shift()
console.log(arr);

//now if we want to delete from middle we use splice

arr2 = ["a","b","c","D","e"]

//we wamt to delete b 

arr2.splice(1,1) //start:end from where you want to delete so here i want to del index one to index one only tahts b only one elment i want to delete
console.log(arr2);

//adding z in place of e

arr2.splice(3,3,"z")
console.log(arr2);

console.log(arr2.indexOf("z"))

//if element is not there it will give -1

console.log(arr2.indexOf("g"))



