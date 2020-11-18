// task 1 
console.log('task 1:');
function value(a,b,c) {
    return (a-b)/c;
}
console.log(value(50,5,5));
// task 2
console.log('task 2:');
function value2(a){
    c = a*a;
    d = a*a*a;
    return result=`Квадрат ${c}, а куб ${d}`;
}
value2(4);
console.log(result);
//task 3
console.log('task 3:');
function min(a,b) {
    if (a<b) {
        return a;
    } else if (b<a){
        return b;
    } else {
        return 'Значения равны';
    }
}
console.log(min(10,9));
function max(a,b) {
    if (a>b) {
        return a;
    } else if (b>a){
        return b;
    } else {
        console.log('Значения равны');
    }
}
console.log(max(29,54));
//task 4
console.log('task 4:');
let arr4 = [];
function diapozon (q,w) {
    if (q<w) {
        for (i=q; i<=w;i++){
         arr4.push(i);
        }return newar = arr4;
}else diapozon(+prompt('Введите начало диапозона'),+prompt('введите конец диапозона'));
}
diapozon(+prompt('Введите начало диапозона'),+prompt('введите конец диапозона'));
function newarr(){
    console.log(newar);
}
newarr();
//task 5
console.log('task 5:');
function isEven (a) {
    if (a%2==0) {
        return true;
    } else  {
        return false;
    }
}
console.log(isEven(6));
//task 6 
console.log('task 6:');
let array = [],
    arra = [1,2,3,4,5,6,7,8,9,10];
function getpush (){
    for (i=0;i<=arra.length;i++) {
        if (isEven(arra[i]) == true){
            array.push(arra[i]);
        }
    }
    return array;
}
console.log(getpush());
//task 7
console.log('task 7: document.write');
function piramida(n){
for(i=1;i<=n;i++){
    for(k=1;k<=i;k++){
        document.write(i);
    }document.write('<br>');
}
}
piramida(9);
// task 8
console.log('task 8:');
function domic(n){
    for (i=0;i<=n;i++){
        for(j=1;j<=n;j++){
            document.write('&ensp;');
        }
        for(k=1;k<=i*2-1;k++) {
            document.write('*');
        }document.write('<br>');
    }
}
domic(+prompt('введите количество рядов'));
//task 9 
console.log('task 9:');
function fib(n) {
    if (n==0 || n==1) {
    return n;
    }else {
        return fib(n-1)+fib(n-2);
    }
}console.log(fib(16));
function ca(){
    let arr = [];
    for(i=0;;i++){
        if (fib(i)<1000){
        arr.push(fib(i))
        }else return arr;
    }
}console.log(ca());
//task 10
console.log('task 10:');
function getnumber(number) {
    number = String(number);
    let  sum=0;
    for(let i=0; i< number.length;i++){
         sum += +number[i];
    }
    if(sum>9){ return getnumber(sum)
    }else return sum
}console.log(getnumber(456));
// task11
console.log('task 11:');
let arr11 = [1,2,5,6,false];
function arrprint(array){
    if (array.length >= 1){
        console.log(array.shift());
        return arrprint(array);
    }
}
arrprint(arr11);
// task 12
console.log('task 12:');
function info(firstName,lastName,middleName,number) {
    let str = `*Домашняя работа: "Функции"`,
        str1= `*Выполнил: студент гр. ${number}`,
        str2 = `*${lastName} ${firstName} ${middleName}`,
        arr= [str,str1,str2];
        max = 0,
        star='';
        for(i=0;i<arr.length;i++){
           max = (max<arr[i].length) ? arr[i].length : max;
        }
        console.log(max);
        for(i=0;i<arr.length;i++){
            for (j=0;j<max;j++){
                if (arr[i].length < max) {
                    arr[i] += ' ';
                }else if (arr[i].length == max){
                    arr[i] +='*';
                }
            }
        }
        for(i=0;i<=max;i++){
            star +='*';
        }
        console.log(star);
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
        console.log(star);
}
info('Алекс','Иванов','Иванович','212601');