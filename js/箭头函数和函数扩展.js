// 箭头函数的使用
{
    let add = (a,b) => a+b;
    console.log(add(10,20));
}

// 函数的扩展
{
    function add(a,b=10) { // 参数添加默认值
        console.log(add.length);    // 非默认的参数个数
        return a+b;
    }

    console.log(add(60));
}