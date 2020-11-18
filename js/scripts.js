// task 1
console.log('task1');
let arr = [1, 2, 3, 4, 5];
for (i = 0; i <= arr.length; i++) {
    console.log([i]);
}
// task 2
console.log('task2');
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0 && arr2[i] < -3 && arr2[i] > -10) console.log(arr2[i]);
}
// task 3
console.log('task3');
let start = 23,
    result = 0,
    arr3 = [];
for (start = 23; start >= 23 && start <= 57; start++) {
    arr3.push(start);
    result += start;
} console.log(arr3);
console.log(`Сумма элементов массива = ${result}`)

console.log('task 3.1');
while (start >= 23 && start <= 57) {
    start++
    arr3.push(start);
} console.log(arr3);
// task 4
console.log('task4');
let arr4 = ['10', '20','30', '40', '50', '3000'];
for (i = 0; i < arr4.length; i++) {
    let z = arr4[i];
    if (z[0]==1 || z[0]==2 || z[0] == 5){
        console.log(`Нужные значения ${z}`);
    }else {
        console.log('Нет нужных значений')
    }
} 
// task 5
console.log('task5');
let arr5 = ['ПН' , 'ВТ' , 'СР' , 'ЧТ' , 'ПТ' , 'СБ' ,'ВС'];
for (i=0; i <arr5.length; i++) {
    let g = arr5[i];
    if(g =='СБ' || g=='ВС'){
        document.write(`<strong>${g}</strong>`);
        // document.write(g.bold());
    } else {
        console.log(g);
    }
}
// task 6
console.log('task6');
let arr6 = ['1056475', '20234523','302345', '40345', '50345', '334523000'];
arr6.push('Мандарин');
console.log(arr6.length);
// task 7
let arr7 = [];
while (true) {
    let a = prompt('Ведите числовые значения');
    arr7.push(a);
    if (a == '' || a == isNaN || a==' ') {
        break;
    }
}console.log(arr7);
console.log(arr7.sort());
console.log('task7');
// task 8
console.log('task8');
let arr8 = [12, false, 'text', 4, 2, -5, 0];
arr8.reverse;
console.log(arr8);


// task 9
console.log('task9');
let arr9 = [5, 9, 21,,,9,78,,,,6];
let sum_ =0;
for(i=0;i<arr9.length; i++){
 
    if(arr9[i] == undefined) {
        sum_+=1;
    }
}console.log(sum_);
// task 10
console.log('task10');
let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let sum10 = 0;
let g=0;
let k=0;
console.log(arr10.indexOf(0));
g=arr10.indexOf(0);
console.log(arr10.lastIndexOf(0));
k=arr10.lastIndexOf(0);
for(i=g;i<k;i++){
    sum10 +=arr10[i];
}console.log(sum10);