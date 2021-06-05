Array.prototype.pushAtFirst = function(...val){
    let valLen = val.length
    let valInd = 0
    let newArr = val 
    for(let i=valLen; i<(valLen+this.length); i++){
        console.log(val.length + "   |     " + valLen)
        newArr[i] = this[valInd]
        valInd++
    }
    return newArr
};

function primeNum(n){
    let primeVal = []
    for(let i=1; i<n; i++){
        if(isPrime(i)){
            primeVal.push(i)
        }
    }
    console.log(primeVal)
}


function isPrime(n){
    if(n<1){
        return false
    }
    if(n<=3){
        return true
    }

    if(n%2==0 || n%3==0){
        return false
    }
    for(let i=5; i*i<=n; i=i+6){
        if(n%i==0 || n%(i+2)==0){
            return false
        }
    }
    return true
}

function primefac(n){
    let pfactor = []
    while(n%2==0){
        pfactor.push(2)
        n=n/2
    }
    for(let i=3; i*i<=n; i=i+2){
        while (n%i == 0) {
            pfactor.push(i)
            n=n/i
        }
    }
    if(n>2){
        pfactor.push(n)
    }
    console.log(pfactor)
}

primefac(14)

Array.prototype.pushAtFirst1 = function(...val){
    let valLen = val.length
    const thisArrLen = this.length;
    let newArr = Array.from(this)
    for(let i=0; i<(valLen+thisArrLen); i++){
        if(i<valLen){  
            this.splice(i,1,val[i])       
        }
        else{  
            this.splice(i,1,newArr[i-valLen])
        }
    }
};

// primeNum(100)
let arr = [3,4,5]
// let start = performance.now()
arr.pushAtFirst1(1,2,4)
// let end = performance.now()

let arr1 = [3,4,5]
// let start2 = performance.now()
arr1.unshift()
// let end2 = performance.now()

// console.log("time by 1 = " + (end-start))
// console.log("time by 2 = " + (end2-start2))


console.log( " arr  = " + arr)
console.log( " arr1 = " + arr)


// console.log(arr)