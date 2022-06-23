function Reverse(number){
    var a = parseFloat(number.toString().split("").reverse().join(""))
    return a;
}
var result = Reverse(123456)
console.log(result)
console.log(typeof result)