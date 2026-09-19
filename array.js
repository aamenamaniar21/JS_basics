//creayting an array 


myarr = ["apple ","mnago", "bannaa"]

//printing array elements using for of loop

for (let items of myarr) {
    console.log(items);
    
}

//printing usimg simple for loop

for (let c = 0; c < myarr.length; c++) {
   console.log(myarr[c]);
   
    
}
//using for in loop 

for (const indexes in myarr) {
   console.log(indexes);
    
}

// using forEach loop

myarr.forEach((value ,index , arr)=>{
    console.log(`${value} ${index}`);
    console.log(`array as whole is ${arr}`);
    
    
})

// usinf map function
myarr.map((values , index , fullarr) =>{
    console.log(`${values} ${index}`);
    console.log(`this is full array ${fullarr}`);
    
    
})

//we can return array using map but we cannot return array using forEach

const arr2 = myarr.map((values , index)=>{
    console.log(values);
    return index
})

console.log(arr2)



//arraow functiom

let myvar = (x,y) =>{
    return x + y
}

console.log(myvar(5,10))

