function modularExponentiation ( base, exponent, modulus ) {
    if(modulus==1){return 0}

    let val =1
    for(var i=0; i<exponent; i++){
        val = (val+base)%modulus
    }
    return val
}

let reg = /\d+/  // \d+ is used to check presence of numeric value if any one is present it will return true
console.log(reg.test('abc123')) // return true
console.log(reg.test('abc')) // return false

reg = /^\d+$/ // ^\d+$ will return true if only numeric values are present
console.log(reg.test('123')) // return true
console.log(reg.test('abc123')) // return false

let reg1 = /^[0-9]*.[0-9]*[1-9]+$/ // will return true if only numeric value is present
console.log(reg1.test('12')) // return false
console.log(reg1.test('12.3')) // return true

console.log(btoa("HI there I am Muhammad Haseeb"))

