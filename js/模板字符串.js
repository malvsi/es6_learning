// 模板字符串的几个要点
// 字符串中凭借变量或直接进行计算
{
    let str = "JavaScript";
    let description = `这是${str}的模板字符串中的方法,他还可以直接计算'6+3'=${6+3}的值`;
    document.write(description + `<br>`);
    console.log(description);
}
// 在字符串中查找值和检测是否以‘我们’为开头的字符串
{
    let str = `我们几个都是es6中新增的方法：<a href=''>includes</a>--<a href=''>startsWith</a>--<a href=''>endsWith</a>`
    document.write(str + `<br>`);
    console.log(`str中是否包含’我们‘：${str.includes('我们')}`);
    console.log(`str是否以’我们‘开头：${str.startsWith('我们')}`);
}