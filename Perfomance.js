// function sumUp(n) {
//     if(n==1)
//     return n;
//     else
//     return (n*sumUp(n-1))
// }

// function sumNumber(nums){
//     let result = 0 // 1
//     nums.forEach(num => { //1
//         result += num   // 3 => n
//     });
//     return result // 1
//     // return nums.reduce((sum, curNum) => sum + curNum,0)

// }

// T = 1+1+1+n = 3+n = 3+1*n
// T = 1*n
// T = n => 0(n) => Linear Time Complexity 

// console.log(sumNumber([1,2,3,4,10,20]))