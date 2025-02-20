let fun1 = function(){
    console.log("element");
}

fun1()


const student = {
    details : {
        name : "krish",
        rollno : 35,
        class : 6,
        symbol : Symbol(234)
    },
    display : function (){
        console.log(`Details Name ${this.details.name} ,
         rollno ${this.details.rollno} , 
         class ${this.details.rollno}  , 
         symbol ${this.details.symbol.toString()}`)
    }
}

student.display()