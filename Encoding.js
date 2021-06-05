let DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")

function  encodeId(num) {
   var  base =  DICTIONARY.length;
   var  encoded = "" ;
    if  (num === 0 ) {
        return  DICTIONARY[0];
    }
    console.log("encoded before loop start : " + encoded) 
    while  (num > 0 ) {
        console.log("Before Iteration | " + encoded + DICTIONARY[(num%base)] + "    |   num%base = " + (num%base))
        encoded +=  DICTIONARY[(num %  base)];
        console.log("After Iteration | " + encoded + DICTIONARY[(num%base)]  + "    |   num%base = " + (num%base))
        console.log("")
        console.log("Math.floor("+num+"/"+base+") = " + Math.floor(num/base))
        num = Math.floor(num /  base);
        console.log("")
    }
    
    return  reverseWord(encoded);
}
    
function  reverseWord(str) {
    var  reversed = ""
    for  (var  i =  str.length - 1 ; i >= 0 ; i-- ) {
        reversed +=  str.charAt(i);
    }
    return  reversed;
}
function  decodeId(id) {
    var  base =  DICTIONARY.length
    var  decoded = 0
    for  (var  index = 0 ; index <  id.split("" ).length; index++ ) {
        decoded =  decoded *  base + DICTIONARY.indexOf(id.charAt(index));
    }
    return  decoded;
}

console.log(encodeId(30236688985)); // prints 'VhU2'
// console.log(decodeId('Haseeb')); // prints '11231230'