{
    // 子类的构造函数中必须要有super()的调用
    class Person{
        constructor(name) {
            this.name = name;
        }

        say() {
            console.log('i am methods for Person');
        }
    }

    class Some extends Person{
        constructor(name,age) {
            // 必须显示调用super()方法
            super(name);
            this.age = age;
        }

        say() {
            console.log('i am methods for Some');
        }
    }

    let me = new Some('li',16);
    console.log(me.name);
    me.say();
}