// 扩展运算符的基本用法
{
    let arr = ['www','taobao','com'];
    // [...arr] 相当于arr中的每个元素，而不是代表arr这个数组
    let arr1 = [...arr];
    console.log(arr1);
    arr1.push('www.taobaoc.com');
    console.log(arr);
    console.log(arr1);
}

// 扩展运算符在函数中的应用
{
    function fn(a,...arg){
        console.log(arg.length);
        console.log(arguments.length);
    }

    fn(1,2,3,4,5,6);
}

{
    function fn(...arg){
        console.log(arg);
        for(let i of arg.values()) {
            console.log(i);
        }
    }

    fn(1,2,3,4,5,6);
}