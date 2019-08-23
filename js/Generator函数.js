// Generator函数的简单案例
{
    function* step() {
        yield 'step1';
        yield 'step2';
        return "ending"
    }

    let s = step();
    for (let index = 0; index < 3; index++) {
        console.log(s.next().value);
    }
}