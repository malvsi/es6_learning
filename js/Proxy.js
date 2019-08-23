// Proxy 代理 ES6增强 是对象或函数的生命周期 预处理
{
    let obj = {
        date: 2019,
        site: 'guangzhou',
        add(val) {
            return val + 100;
        }
    }

    // Proxy对象，第一个参数是对象的定义，第二函数是预处理业务逻辑
    let pro = new Proxy({
        date: 2019,
        site: 'guangzhou',
        add(val) {
            return val + 100;
        }
    },{
        // get函数接收是三个参数，target是目标对象，key是属性，receiver是Proxy实例本身
        get: function(target,key,receiver) {
            console.log(target,key);
            return target[key];
        },
        // set函数接收四个参数，target是目标对象，key是属性，value是属性值，receiver是Proxy实例本身
        set:function(target,key,value,receiver) {
            console.log(`${key} value is change...`);
            target[key] = value;
        },
        // apply函数接收三个参数，targte目标对象，ctx目标对象上下文对象（this），args目标对象的参数数组
        apply:function(target,ctx,args) {
            return Reflect.apply(...arguments);
        }
    })

    pro.date = 2010;
    console.log(pro.site);
}

// 预处理，当set设置的值不符合是，使用Proxy进行拦截
{
    let me = {
        name: 'lijunjian',
        money: 5000,
        buy: 'Apple MacBook pro'
    }

    let pro = new Proxy(me,{
        set: (target,key,value,receiver) =>{
            if(key === 'money') {
            if(!Number.isInteger(value)) {
                throw new TypeError('必须要输入数字');
            }
            if(parseInt(value) > 5000) {
                throw new Error("工资没那么高，不能买超过5000的商品");
            }
            target[key] = value;
        }else{
            target[key] = value;
        }
        }
    })

    pro.money = 120;
    pro.buy = "apple iphone xmas";
    console.log("pro:",pro);
    console.log("me:",me);
}