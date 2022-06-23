

function Pallindrome(number){
    var a = parseFloat(number.toString().split("").reverse().join(""))
    if (number == a){
        console.log( a," is a palimdrome number")
    }
    else{
        console.log(a, "is not a palindrome number")
    }
    return a;
}
Pallindrome(101)

Pallindrome(123)