// 装饰器
// 1. 类装饰器 
  function add(name : string) {
   return function (constructor : Function){
    constructor.prototype.name = name;
    constructor.prototype.eat = ()=>{
      console.log(name);
    };
   }
}

@add('mike')  class Person {
  name! : string;
  eat! : ()=> void;
  constructor() {
    
  }
}
let P = new Person()
console.log(P.name);
// P.eat()
//还可以使用装饰器工厂 这样可以传递额外参数
function addNameEatFactory(name: string) {
  return function (constructor: Function) {
    constructor.prototype.name = name;
    constructor.prototype.eat = function () {
      console.log("eat");
    };
  };
}
@addNameEatFactory("hello")
class Person1 {
  name!: string;
  eat!: Function;
  constructor() {}
}
let p: Person1 = new Person1();
console.log(p.name);
p.eat();