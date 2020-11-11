// task 1
for ( i=1; i <= 50; i++) {
    console.log(i)
}
console.log('task 1.1');
for ( i=35; i >= 8; i--) {
    console.log(i)
}
console.log('task 1.2');
// task 2
let i2 = 89;
while (i2 >= 11) {
    console.log(i2);
    i2--;
    console.log('<br>')
}
console.log('task 2')
// task 3
let sum = 0;
for (let i=0; i<101; i++){
    sum += i;
    console.log(`промежуточная сумма ${sum} на шаге ${i}`);
}
console.log(sum);
console.log('task 3');
// task 4
let summ = 0;
for (let i=0; i <= 5; i++) {
    summ=0;
        for( let j=0; j <=i; j++) {
    summ +=j;
    }
    console.log(`Сумма чисел ${i} равна ${summ}`);
}
console.log('Task 4')
// task 5
let c = 8;
while (c <=56) {
    if (c % 2 == 0) {
        console.log(c);
    }
    c++;
}
console.log('task 5.1');
for(c=8; c<=56; c++) {
    if (c % 2 ==0) {
        console.log(c);
    }
}
console.log('task 5.2');
// task 6
в=10;
for (a=2; a<=в; a++) {
    sum_=0;
    console.log(`Таблица умножения для ${a}`);
    for(let b=1; b<=в; b++){
        sum_ = a*b;
        console.log(`${a}*${b} = ${sum_}`);
        }
    }
console.log('task 6')
// task 7
let g=1000;
let num=1;
for (; g>50;num++){
     g/=2;
     if(g>50) {
    console.log(` Количество итераций ${num}`);
     }
}
console.log('task 7');
// task 8
let sym = 0,
    s=0,
    b=0;
    while(true) {
        let a = prompt('Введите число');
        if(isNaN(a)) {
            console.log('Неверное значение');
            break;
        }
        if (isFinite(a)) {
        a=Number(a);
        b++;
        sym+=a;
        s=sym/b;
        console.log(`Среднее значение : ${sym} / ${b} = ${s}`)
        }
        if (a == 0 && a == '') {
            console.log('Неверное значение 0');
            break;
        }
    }
    console.log('task 8');
    // task 9
    let arr_9 = '4 98 4 6 1 32 4 65 3 5 7 89 7 10 1 36 8 57',
        arr9 = arr_9.split(' '),
        min=1,
        max=0;
    for(i=0; i< arr9.length; i++) {
        let h = arr9[i];
        if (h < min){
            min=h;
        }
        if (h > max) {
            max=h;
        }
    }console.log(`Минимальное значение = ${min}`);
    console.log(`Максимальное значение = ${max}`);
    console.log('task 9');
//     let number = '',
//     max,
//     min;
//     counter = 0;
//  let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
//  for(let i=0;; i++) {
//     if (str[i] == undefined) {
//         break;
//     }
//     if (str[i] != ' ') {
//         number = number + str[i];
//     }else {
//         if (counter == 0) {
//             min = +number;
//             max = +number;
//         }
//         if(min > +number) min = number;
//         if(max < +number) max = number;
//         counter++;
//         number = '';
//     }
//  }
//  console.log (`max ${max}`);
//  console.log (`min ${min}`);
// task10
console.log('task10');
