// finding lengths of any string

let name = "samad"
console.log(name.length);

// " " , ' ' both are fine in js but
// suppose if i want to write smth like this -> "he is a "brave" man" ("" inside double qoutes gives an error)
// so instead we use \"xyzzzz \"
// and for single quote same \'xyzz  \'

let sentence = "he is a \"brave\" man"
console.log(sentence);

// converting this string into an array
let myarr = Array.from(sentence)
console.log(myarr);

//search operations in string 

let word = "sparrow"
console.log(word.indexOf("r")); //3 - starts searching from front
console.log(word.lastIndexOf('r')); //4 -starts searching from backwards

// searchb

console.log(word.search("row"));

//match and match all
//match stops after first match
//match all doesnot stop after first search it keep on for all the matches (gloabally)

let mystr = "this is a sentence okay got it ? okay"

console.log(mystr.match("okay"));
let myresult=mystr.matchAll("okay");

//matchall is an iterator which gives more than one output
//matchAll gives an array so we can get our value through its index
for (let results of myresult) {
   console.log(results[0]);
   
    
}
//everything here is case sensitive

//includes method

console.log(mystr.includes("this"));

//startsWith and endsWith

console.log(mystr.startsWith("okay"));
console.log(mystr.endsWith("this"));

//stringextraction

let mystr2 = "this is a string"

//we use slice(startIndex,endIndex)

console.log(mystr2.slice(5)); //5th index se last tak string ke
console.log(mystr2.slice(5,7)); //5th index se 6th tak


// same we can do using substring

console.log(mystr2.substring(5));//5th index se last tak string ke
console.log(mystr2.substring(5,7)); //5th index se 6th tak

//replace

console.log(mystr2.replace("t","h"));

//charAt to find the index of any character

console.log(mystr2.charAt(1));

//at method is new method which can also give inedxing from last minus values

console.log(mystr2.at(-6));

// charCodeAt is used to get the ascci number of charachter suppose a - 97

console.log("a".charCodeAt(0));

//string.fromcharCode is used to convert numbers to string
console.log(String.fromCharCode(97));


//IQ - if we want to print a-z characters

for (let char = "a".charCodeAt(0); char <="z".charCodeAt(0); char++) {

    console.log(String.fromCharCode(char));
    
   
}






