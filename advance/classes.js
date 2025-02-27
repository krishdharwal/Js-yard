class User{
    constructor(name){
        this.name = name;
    } 
    
    getName(){
        return this.name;
    }
    
    setName(name){
        this.name = name
    }

}

const krish = new User("krish")
console.log(krish.getName());
