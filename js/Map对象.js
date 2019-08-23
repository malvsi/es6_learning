// Map 对象
{
    let cat = {
        name: '喵喵',
        age: 1,
        color: 'black-white',
        like: 'some'
    }

    let map = new Map();
    map.set('cat',cat);

    // 获取map的某个key的值
    let catObj = map.get('cat');
    
    map.set('dog',{name:'gouzai',age:3});
    console.log(map);

    /* for(let key of map.keys()) {
        console.log(key);
        console.log(map.get(key));
    } */

    /* for(let item of map.values() ) {
        console.log(item);
    } */

    for(let [key,value] of map.entries()) {
        console.log(key,value);
    }
}