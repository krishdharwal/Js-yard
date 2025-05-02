const Teacher = {
    class : 4
}

const Student = {
    name : "krish"
}

// Object.setPrototypeOf(obj, prototype)
//  sets the internal prototype ([[Prototype]]) of obj to prototype

// If Student is a constructor function or class,
//  this will make Student inherit static properties/methods from Teacher 
// (the constructor/class itself, not its instances)
Object.setPrototypeOf(Student, Teacher)

class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  // inheritence
  class Dog extends Animal {
    constructor(name) {
      super(name); // Calls the parent class constructor
    }
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog("Mitzie");
  d.speak(); // "Mitzie barks."
  