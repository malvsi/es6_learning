{
    let url = 'http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html';

    function getNewsList(url) {
        const promise = new Promise(function(resolve,reject) {
            $.get(url,function(data,status) {
                if(status === 'success'){
                    resolve(data);
                }else{
                    reject(new Error('url错误，无法获取'));
                }
            })
        });
        return promise;
    }

    getNewsList(url).then(function(data) {
        console.log(data);
    },function(data) {
        console.log(data);
    })
}

{
    let p1 = new Promise(function(resolve,reject) {
        setTimeout(()=>{
            resolve("p1成功了");
        },3000)
    });

    let p2 = new Promise(function(resolve,reject) {
        setTimeout(()=>{
            resolve(p1);
        },1000)
    })

    p2.then(function(success) {
        console.log(success);
        return p2;
    })
    .then(function(scu) {
        console.log("scu: " + scu);
    })
    .catch(function(fail) {
        console.log(fail);
    })
}