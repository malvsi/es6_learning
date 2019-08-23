// 数组的解构赋值一
{
    function fn() {
        return ["name", "sex", "age", "color"];
    }

    let arr = [name, , age, color] = fn();
    console.log(`name=${arr[0]},age=${arr[2]},color=${arr[3]}`);
    console.log(arr[1]);
}


// 数组的解构赋值二
{
    let [a, b = '张三'] = ['李四', undefined];
    console.log(`a=${a},b=${b}`); //b='张三'

    /* let arr = [c,d,...f] = [1,2,3,4,5];
    console.log(arr);   // arr=[1,2,3,4,5] */

}


// 对象的解构赋值二 -- 案例
{
    function getJSON() {    
        let json = {
            'name': '张三',
            'age': 14,
            'sex': '男的'
        };
        return json;
    }

    // 对象解构赋值的案例，在函数返回的对象中选择特定的属性和值
    let {name,sex,color='绿色'} = getJSON();     // 选择对象的name和sex和color属性
    console.log(name);
    console.log(sex);
    console.log(color);
}


// 字符串的解构赋值
{
    let [a, b, ...c] = "我是谁你是谁";
    console.log(a);
    console.log(b);
    console.log(c);
}