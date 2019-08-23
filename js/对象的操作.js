// 对象的赋值
{
    let name = '对象',length= 3, web= 'taobao';
    let obj = {name,web,length};
    function fn(ss) {
        console.log(ss);
    }

    fn(obj);
}

// 对象key值的构建
{
    let getKey = ()=> '姓名';

    // es6中对象的属性名可以是一个变量或者函数
    // 如果属性是变量或函数的时候，对象的属性写法是 [key]
    let obj = {     
        [getKey()]: '张三'
    }

    console.log(obj);
}

// 对象自定义方法
{
    let obj = {
        add:(a,b)=> a+b
    }

    console.log(obj.add(2,5));
}

// 对象原型的Object.is(value1,value2)方法
// === 同值相等 Object.js()严格相等
{
    let person = {
        name: 'person',
        age: 14
    }

    let dog = {
        name: 'dog',
        age: 14
    }

    console.log(Object.is(person.age,dog.age));
    console.log(Object.is(NaN,NaN));
}

// 合并对象Object.assign(target,source) 第一个参数是目标对象，后面的是源对象
// 如果源对象中的属性和目标对象的属性相同，那么源对象的属性值会覆盖目标对象的属性值
{
    let person = {name:'战三',color: 'red'};
    let student = {name:'战三',age:14};
    let teacher = {age:15,skill:'teach'};

    let obj = Object.assign(person,student,teacher);    // obj是Person的实例对象，因为Person是目标对象
    console.log(obj);
}