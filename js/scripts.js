//title meta 
let title = document.createElement('title');
title.innerHTML = 'Clean js';
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);
document.head.appendChild(title);
let lang = document.querySelector('html');
lang.setAttribute('lang', 'en');
let link = document.createElement('link');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap');
link.setAttribute('rel', 'stylesheet');
let link2 = document.createElement('link');
link2.setAttribute('rel', 'preconnect');
link2.setAttribute('href', 'https://fonts.gstatic.com');
document.head.appendChild(link);
document.head.appendChild(link2);


//style
let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
* {
    margin:0;
    padding:0;
}
.main {
    width: 1280px;
    height: 880px;
    margin: 200px auto;
}
.header {
    font-size: 36px;
    color: #212121;
    text-align:center;
    margin-bottom:10px;
    font-family:'avro';
    font-weight:400;
}
.subtitle {
    text-align:center;
    margin-bottom:55px;
    color: #9FA3A7;
    font-family:"Open sans";
    font-weight:400;
}
.item1{
    width: 400px;
    height: 480px;
    text-align:center;
    border-radius: 10px;
}
.item1:hover{
    background-color:#8F75BE;
    cursor:pointer;
}
.wrapper {
    display:flex;
    justify-content: space-between;
    border: 2px solid #E8E9ED;
    border-radius: 20px;
    width:800px;
    margin:0 auto;
}
.size {
    font-size: 12px;
    color: #9FA3A7;
    margin-bottom:20px;
}
h3 {
    margin-bottom:25px;
    font-family:'avro';
    font-weight:400;
    font-size:36px;
}
.sm {
    margin-bottom: 50px;
    font-family:'Open sans';
    font-weight:400;
    color:#9FA3A7;
}
.mt {
    margin-top : 80px;
    font-family:"Montserrat";
    font-weight:700;
}
.btn {
    border: 2px solid yellow;
    border-radius:20px;
    text-transform:uppercase;
    padding: 15px;
    outline: none;
    width:180px;
}
.btn:hover{
    background-color:#8F28BE ;
    cursor: pointer;
    color: white;
}
`
//main

let main = document.createElement('div');
main.setAttribute('class','main');
document.body.appendChild(main);

// header

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
main.appendChild(h1); 
h1.setAttribute('class', 'header');
let pSubTitle = document.createElement('p');
pSubTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
pSubTitle.setAttribute('class','subtitle');
main.appendChild(pSubTitle);

//content
let wrapper = document.createElement('div'), 
    item1 = document.createElement('div'),
    p1 = document.createElement('p'),
    h3 = document.createElement('h3'),
    p2 = document.createElement('p'),
    btn = document.createElement('button');
main.appendChild(wrapper);
wrapper.setAttribute('class', 'wrapper');
wrapper.appendChild(item1);
item1.setAttribute('class','item1');
p1.innerHTML = 'Freelancer';
p1.setAttribute('class','size mt');
item1.appendChild(p1);
h3.innerHTML = 'Initially designed to';
h3.setAttribute('class', 'h3');
item1.appendChild(h3);
p2.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing ';
p2.setAttribute('class', 'sm');
item1.appendChild(p2);
btn.innerHTML = 'Start Here';
btn.setAttribute('class','btn');
item1.appendChild(btn);

let item2=item1.cloneNode(true);
item2.firstChild.innerHTML = 'Studio';
console.log(item2); 
wrapper.appendChild(item2);             




