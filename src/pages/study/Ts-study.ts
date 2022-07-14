// 装饰器
// 1. 类装饰器
//   function add(name: string) {
//    return function (constructor: Function){
//     constructor.prototype.name = name;
//     constructor.prototype.eat = ()=>{
//       console.log(name);
//     };
//    }
// }
//
// @add('mike')  class Person {
//   name!: string;
//   eat!: () => void;
//   constructor() {
//     console.log(9527)
//   }
// }
// let P = new Person()
// console.log(P.name);
// // P.eat()
// //还可以使用装饰器工厂 这样可以传递额外参数
// function addNameEatFactory(name: string) {
//   return function (constructor: Function) {
//     constructor.prototype.name = name;
//     constructor.prototype.eat = function () {
//       console.log("eat");
//     };
//   };
// }
// @addNameEatFactory("hello")
// class Person1 {
//   name!: string;
//   eat!: Function;
//   constructor() {}
// }
// let p: Person1 = new Person1();
// console.log(p.name);
// p.eat();

// 2.自己实现TS内置类型 Pick

interface Test {
  name: string,
  age?: number
}
type myPick<T,K extends keyof T = keyof T>= {
  [Q in K]: T[Q]
}
type e = myPick<Test,'name'>
const useE: e = {name : '张大大'}
console.log(useE)

// 3.运用Required
type useRequired = Required<Test>;
const useRequiredVariable: useRequired = {name : '魏超',age :24};
console.log(useRequiredVariable)

// 4.自己实现内置类型Exclude
type myExclude<T,E> = T extends E ? never : T;
const useMyExclude: myExclude<{change: string}, Test> = {change : '1'};
console.log(useMyExclude)

// 5.获取Promise的返回值
const demo1 = (): Promise<string>=> new Promise((resolve)=> {
  resolve('您好')
})
type temp = typeof demo1;
type demo11 = ReturnType<temp>;
console.log(demo1);
type getPromiseType<T extends Promise<any>> = T extends Promise<infer U>
                                                ? U extends Promise<any> ? getPromiseType<U>:
                                                U
                                                : never
// const demo2: getPromiseType<temp> = 'gg'
// console.log(demo2);

// 6.接受一个布尔值,是返回T,否则返回U;
type IF<b extends Boolean,T,U> = b extends true ? T : U;

const useIF: IF<true,string,number> = '1';
console.log(useIF)
