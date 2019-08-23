"use strict";

{
    var fn = function fn() {
        var json = {
            "name": "张三",
            "sex": "男的",
            "age": 14
        };
        return json;
    };

    var res = fn();
    var name = res.name,
        age = res.age;

    console.log(name);
    console.log(age);
}
