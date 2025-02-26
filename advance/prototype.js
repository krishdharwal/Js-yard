const Teacher = () => {
    let num = 0;
    return num;
}

Object.prototype.myFunction = () => {
    console.log("this is my function in protype")
}

Array.prototypemyFunction = () => {
    console.log("this is my function in protype")
}


String.prototype.myFunction = () => {
    console.log("this is my function in protype")
}


Function.prototype.hi = () => {
    console.log("hello there")
}
// const teacher1 = new Teacher()
// // teacher1.myFunction1()

Teacher.hi()
