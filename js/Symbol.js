// Symbol对象的用法
{
    let name = Symbol();
    let obj = {
        [name]: '战三',
    }

    console.log(obj[name]);
    obj[name] = "姓名";
    console.log(obj[name]);
}

{
    let size = Symbol('size');

    let obj = {name:'技术',age:18,cute:'sss',[size]:'162cm'};
    // Symbol作为属性不会被遍历
    for (const key in obj) {
        console.log(obj[key]);
    }
}