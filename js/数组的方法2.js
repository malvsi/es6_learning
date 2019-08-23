// Array实例arr.fill方法
{
    let arr = ['li','jun','jian'];
    // arr.fill('str',startsIndex,endsIndex)
    arr.fill('ni',-1);
    console.log(arr);
}

{
    let arr = ['li','jun','jian'];
    let obj = {
        name: 'li',
        age: 'jun',
        sex: 'jian'
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            console.log(element);
        }
    }
}