//reverse a string in js withot function

function revfunvc(str1)
{
    console.log(str1);
    
    reverse = " "
    for (let c = str1.length-1; c >= 0; c--){
        reverse = reverse + str1[c]
        
    }
    return reverse
    
}

ans = revfunvc("this is a string")
console.log(ans);

//is palindome using variable argyment function

const ispalindrome = (str1) =>{

    rev = " "
    for (let c = str1.length; c >= 0; c--) {
      
        rev = rev + str1[c]
        
    }

    // if (rev === str1) {
    //     console.log("is a plaindrome")
    // }
    // else{
    //     console.log("it is not");
        
    // }

    return str1 === rev ? true : false
}

ans2 =ispalindrome("this is passed strin")
console.log(ans2)
