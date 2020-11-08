// Task 1
// let name = prompt("Ваше имя?"),
//     age = prompt("Ваш возраст?"),
//     city = prompt("Ваш город?"),
//     phone = prompt("Ваш номер телефона?"),
//     email = prompt("Ваш email?"),
//     company = prompt("Где вы работаете?");

    // console.log(`Меня зовут ${name}. Мне ${age}  лет. Я проживаю в городе ${city} и работаю в компании ${company} . Мои контактные данные : ${phone}, ${email}`);
// Task 2

// let birthday = 2020 - age;
// console.log(' Родился в ' + birthday);

// Task 3

let str = '123456',
    a1 = 1,
    b1 = 2,
    c1 = 3,
    a2 = 4,
    b2 = 5,
    c2 = 6,
    sum1 = a1+b1+c1,
    sum2 = a2+b2+c2;
    if (sum1 == sum2) {
        console.log('Да')
    } else {
        console.log('Нет')
    }
    (sum1 == sum2) ? console.log(true) : console.log(false);


// Task 4

let a = 1,
    a_ = -3;
if (a > 0) {
    console.log('Верно')
} else {
    console.log('Неверно')
}
(a_ > 0) ? console.log('Верно') : console.log('Неверно');

// Task 5
    let _a = 10,
        _b = 2,
        _sum = _a + _b,
        sum_ = _a - _b,
        pr = _a * _b,
        ch = _a / _b;
    console.log(_sum);
    console.log(sum_);
    console.log(pr);
    console.log(ch);
    if (_sum > 1) {
        console.log(_sum**2);
    }
// Task 6

if ((_a > 2 && _a < 11) || (_b >= 6 && _b < 14)) {
    console.log(true);
} else {
    console.log(false);
}

// Task 7

let n;
if (n > 0 && n < 15) {
    console.log('1 четверть');
} else if (n > 15 && n < 30) {
    console.log('2 четверь');
} else if (n > 30 && n < 45) {
    console.log('3 четверь');
} else if ( n > 45 && n < 60) {
    console.log('4 четверть');
} else {
    console.log('в таких числах не измеряется время');
}
// Task 8

let day = 10;
if (day > 0 && day < 11) {
    console.log('1 декада');
} else if (day > 11 && day < 21) {
    console.log('2 декада');
} else if (day > 21 && day < 31) {
    console.log('3 декада');
} else {
    console.log('нет такого понятия в декаде месяца');
}

switch (day) {
    case (day > 0 && day < 11):
    console.log('1 декада');
    break;
    case (day > 11 && day < 21):
    console.log('2 декада');
    break;
    case (day > 21 && day < 31):
    console.log('3 декада');
    break;
    default: console.log('нет такого понятия в декаде месяца');
}

// Task 9

let day_year = 62;
    mouth = day_year / 31,
    week = day_year / 7,
    hour = week * 168,
    min = hour * 60,
    sec = min * 60;
    console.log(mouth);
    console.log(week);
    console.log(hour);
    console.log(min);
    console.log(sec);
    if (day_year % 365 != 0 ) {
        console.log('Меньше года');
    }
    if (day_year % 31 != 0) {
        console.log('Меньше месяца');
    }
    if (day_year % 7 != 0) {
        console.log('Меньше недели');
    }
// Task 10
 day = 256;
 switch (day) {
    case (day >=1 && day <= 31):
        console.log('Январь');
        break;
    case (day <=60 && day > 31) :
        console.log('Февраль');
        break;
        case (day <=91 && day > 60) :
        console.log('Март');
        break;
        case (day <=121 && day > 91) :
        console.log('Апрель');
        break;
        case (day <=152 && day > 121) :
        console.log('Май');
        break;
        case (day <=182 && day > 152) :
        console.log('Июнь');
        break;
        case (day <=213 && day > 182) :
        console.log('Июль');
        break;
        case (day <=244 && day > 213) :
        console.log('Август');
        break;
        case (day <=274 && day > 244) :
        console.log('Сентябрь');
        break;
        case (day <=305 && day > 274) :
        console.log('Октябрь');
        break;
        case (day <=335 && day > 305) :
        console.log('Ноябрь');
        break;
        case (day <=366 && day > 335) :
        console.log('Декабрь');
        break;
        default: console.log('Столько дней в весакосном году не бывает!');
 }
 switch(day) {
    case (day >=1 && day <=60) :
    console.log('Зима');
    break;
    case (day >= 274 && day <= 366) :
    console.log('Зима');
    break;
    case (day >= 60 && day <= 152) :
    console.log('Весна');
    break;
    case (day >= 152 && day <= 244) :
    console.log('Лето');
    break;
    default: console.log('Это количество дней больше года')
 }
 console.log(day);