//diff array methods in js
//map and filter methods

myarr =[1,2,3,4,5,5,7,8,9,10]

let newarr = myarr.map((current)=>{

    return current*10

})

console.log(newarr)

//using filter method 

let newarr2 = newarr.filter((current)=>{
    return current > 10
})

console.log(newarr2);


// now we have reduce 
// reduces ke 2 imp thiings
// 1 - it gives only one value
// 2 - it has an accumulated (running parameter) for sum of numbers like operations

arr2 = [100,200,300,400,500,600,700]

let sumbe = arr2.reduce((accumulatedVal, current) =>{
    return accumulatedVal + current
},0)

console.log(sumbe);


