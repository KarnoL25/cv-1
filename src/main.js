
let html = document.querySelector('#html'); 
let style = document.querySelector('#style')// 找到元素
let string = `
/*你好,我是Karno，正在学习前端
接下来我要加样式了
先reset一下CSS*/
*{
    margin:0;padding:0;box-sizing:border-box;
}
/*接下来准备一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
注意看好了
首先把div变成一个圆形 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳相承的
一黑一白 */
#div1{
    background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 添加阴阳鱼的头 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background:radial-gradient(circle,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%,rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background:radial-gradient(circle,rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%);
}

`;
let string2 = ''; 
let n = 0;
// string = string.replace(/\n/g,'<br>') // 把字符串里的回车变成html里的换行符号，用到了正则表达式

let step =()=>{ 
    setTimeout(()=>{
        // 问号冒号表达式版本
        // string2 += string[n]==='\n' ? '<br>' : string[n];
        if (string[n] === '\n'){
            string2 += '<br>'; 
        }else if(string[n] === ' '){ 
            string2 += '&nbsp;';
        }else{
            string2 += string[n];
        }
        html.innerHTML =string2;// 可以在网页上呈现内容
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n < string.length-1){
            // 如果n不是最后一个，就继续
            n += 1;
            step();
        }else{    
        }
    },50);
};
step();





// setInterval(()=>{ //每延迟X秒运行一次
//     n++
//     html.innerHTML = n;
// },1500)