{
    let str = "lijunjian";
    let iterator = str[Symbol.iterator]();

    for(let i=0;i<str.length;i++) {
        console.log(iterator.next());
    }
}