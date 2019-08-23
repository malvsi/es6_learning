// Array.from(json) 伪数组转成真数组
{
    let json = {
        '0': 'name',
        '1': 'sex',
        '2': 'color',
        length: 3,
    }

    let arr = Array.from(json);
    console.log(arr);
}

// Array.of(str,...str) 把str字符串转成数组
{
    let str = "我是谁";
    let arr = Array.of(str,"他是谁","ta是谁","who is he");
    console.log(arr);
}

// Array实例 arr.find()和arr.findIndex()方法
{
    let arr = [1,2,3,4,5,6];
    // find有三个参数，第一个参数是一个回调函数，函数中有三个值分别是：value，index，arr
    // 返回值是符合回调函数条件的第一个数组的项
    let result = arr.find((value,index,arr)=>{
        return index>2;
    })
    console.log(result);

    // findIndex的返回值是一个索引，根据回调函数的条件寻找数组中是否有符合的项并把项的index索引值返回
    result = arr.findIndex((value,index,arr)=>{
        return value === 3
    });
    console.log(`arr中value===3的索引值是:${result}`);
}

// Array实例arr.includes()方法，返回一个布尔值
{
    let arr = [12,3,5,6,89];
    let b = arr.includes(6);
    console.log(`数组中是否有6这个值？：${b}`);
}

// Array实例arr.keys()和arr.values()和arr.entries()方法
{
    // 这三个方法都是数组的遍历方法
    let arr = ['一','二','三','四','五','六'];
    for(let key of arr.keys()) {    // 遍历数组的index
        console.log(key);
    }
    for(let value of arr.values()) {    //遍历数组的value
        console.log(value);
    }
    for(let [key,value] of arr.entries()) { // 以键值对的方式遍历数组
        console.log(key + ":" + value);
    }
}