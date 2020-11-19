// task 1
console.log('task 1:');

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/gi,'!'));

// task 2
console.log('task 2:');

let date = '2025-12-31';
console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'));
// console.log(date.replace(/-/g,'/'));

// task 3
console.log('task 3:');

let str3 = 'Я учу javascript!';
console.log('Метод substring:');
console.log(str3.substring(2,16));
console.log('Метод substr:');
console.log(str3.substr(2,14));
console.log('Метод slice:');
console.log(str3.slice(2,16));

// task 4
console.log('task 4:');

let arr4 = [4,2,5,19,13,0,10],
    sum=0;
for(i=0;i<arr4.length;i++){
    sum+=Math.pow(arr4[i], 3);
}console.log(`Сумма кубов элементов массива равна ${sum}`);
console.log('А квадратный корень равен:')
console.log(Math.sqrt(sum));;

// task 5
console.log('task 5:');

function value(a,b){
    c = a - b;
    return Math.abs(c);
}
console.log(value(3,5));

// task 6 
console.log('task 6:');
let data = new Date();
function dateneed(n){
    n.toLocaleString('ru');
//    return  // n.replace(/([0-9]{2}.[0-9]{2}.[0-9]{4},[0-9]{2}:[0-9]{2}:[0-9]{2})/gi,'$12$13:$15$16:$18$19 $1$2.$4$5.$7$8$9$10') 
}
console.log(dateneed(data));

// task 7 
console.log('task 7:');

let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab+a/gi));

// task 8 
console.log('task 8:');
function check(number){
 if (number == /^[+]\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/) {
    return true
 } else {
     return false
 }
}
console.log(check('+375-29-551-92-14'));
// console.log('+375-29-551-92-14' == /^[+]\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/); почему false???

// task 9
console.log('task 9:');
let email = 'vladhillary@gmail.com';
function checkemail (){
    if (email == /^[\w]{2,}@{1}[\w]{2,}.[\w]{2,11}$/i) { //почему опять false???
        return true;
    }else {
        return false
    }
}
console.log(checkemail());