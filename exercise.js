// // console.log("fdjaoisfh")
// const num = 123
// let arr = [21,213,123,23,3]
// // Array.isArray(arr)
// // console.log(arr)

// let fun = function(){
//     return 123;
// }

// console.log(fun())

// const obj = {
//     name : "krish",
//     rollno  : 123,
//     steps : 1111
// }

// obj.name;


// making of an array of array
const arr1 = [1,2];
const arr2 = [4,2];
const arr3 = [2,2];

// if(arr.includes(2)){
//     console.log(" ok")
// }

const arr = [arr1,arr2];
arr.push(arr3)
// console.log(arr);
arr.forEach((ele) => {
    console.log(ele);
})

if(arr.includes([2,2])){
    console.log(" ok")
}else console.log()