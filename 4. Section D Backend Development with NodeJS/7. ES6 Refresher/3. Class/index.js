// Classes - Blueprint to create objects
class Vehicle {
    constructor(param1, param2) {
      this.color = param1;
      this.passenger = param2;
    }
    saySomething() {
      console.log(this.color);
    }
  }
  // Inheritance
  // Derived Class
  class Car extends Vehicle {
    constructor(numWheel, pass, color) {
      super(color, pass);
      this.wheel = numWheel;
    }
  }
  
  let obj1 = new Car(4, 6, "Yellow");
  console.log(obj1);