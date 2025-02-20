// primtive
let num = 123;
let bool = false
let symbol = Symbol("9283")

// non primtive
const arr = []
const arr2 = Array(1,2,3,4,4)
console.log("i am in datatype file");

console.log(arr2);

const obj = {
    name : "krish",
    rollno : 35,
    branch : "computer",
    // this how to write a symbol
    [symbol] : "13134",
    display : function(){
        console.log(this)
    }

}

obj.display()


for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    console.log(element);
}





