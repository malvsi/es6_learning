// Set 不可有重复值,只能添加数组
{
    let setArr = new Set(['name','age','color','weight','name']);
    console.log(setArr);
    // 添加一个值
    setArr.add('hight');
    // 删除特定值
    setArr.delete('color')
    // 查找一个值
    console.log(setArr.has('age'));
    console.log(setArr);

    // 清空全部值
    setArr.clear();
    console.log(setArr);
}

// WeakSet 只能通过add方法添加对象
{
    let dog = {
        a:'技术胖',
        b:'jspang'
    }
    let weakObj = new WeakSet();
    weakObj.add(dog);
    console.log(weakObj);
}
