// 对象的函数解构JSON
{
    let obj  = {
        name: '张三',
        age: 32,
        sex: '男的'
    }

    function print({name,age}) {
        console.log(name);
        console.log(age);
    }
    print(obj);
}

// 数组的函数解构
{
    let arr = ['li','jun','jian'];

    function print(a,b,c) {
        console.log(a,b,c);
    }

    print(...arr);
}

// in判断某个值是否在对象中存在
{
    let obj = {
        href: 'www.baidu.com',
        tag: 'a',
        id: 'baidu',
        open: true,
    }

    // 判断obj中是否有id这个属性
    console.log('id' in obj);
}

// in判断数组是否有空位
{
    let arr = ['li',,'jian','zhong'];
    // 数组的索引1中是否是为空
    console.log(1 in arr);

    // 筛选
    let res = arr.filter(item=> item.length>2);
    console.log(res);
}