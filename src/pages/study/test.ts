// eslint-disable
// es6+ 新骚操作
// 1 仅限于js-> 用+号隐式转换为number类型
const obj_1 : {str : any} = {
  str : '1'
}
obj_1.str = +obj_1.str;
// 同理获取时间戳
  const Date_result = +new Date()
// 2 幂运算 num_1 === num_2
const num_1 = Math.pow(2,3);
const num_2 = 2 ** 3;

// 3 向下取整 doubleToNumber1 === doubleToNumber2
const doubleToNumber1 =  Math.floor(2.33);
const doubleToNumber2 =  ~~2.33;

// 4 ??  ?.  !. 操作符
// 4.1 ?? 用来判断是否为null和undfined,是才执行右侧的表达式
const test_1 = null;
if((test_1 ?? '') === ''){
   // noop
}
// 4.2 ?. 当对象里有这个属性的时候才执行,多用于非空判断
const arr_1 : Array<string> = ['name']
if(arr_1 && arr_1?.length){
  console.log('___');
}
// 4.3 !. 强制判断
// 4.4 ! 
const a = undefined!





console.log(Date_result,num_1,num_2,doubleToNumber1,doubleToNumber2,a,arr_1);
