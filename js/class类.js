{
    let play = 'play';
    class Person{
        constructor(name) {
            this.name = name;
        }

        say() {
            console.log('定义在Person原型prototype上的方法');
        }

        // 属性表达式   
        [play]() {
            console.log('i want to play');
        }
    }

    let p = new Person('li');
    p.play();
    console.log(Person.hasOwnProperty('name'));
    // 类的方法是定在原型上的，不可枚举的
    console.log(Person.hasOwnProperty('say'));  //false
}

{
    // 类的静态方法
    class Person{
        static say() {
            console.log('我是静态方法');
        }
        static name = '我是静态属性'
    }

    let p = new Person();
    console.log(Person.name);
    Person.say();
}

{
    // 实例属性的方法
    class Foo{
        count = 0;
    }

    let f = new Foo();
    console.log(f.count);
    
    
}