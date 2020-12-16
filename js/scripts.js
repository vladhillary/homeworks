let Autopark = function () {
    this.get = function(){
        this.facecontrol = confirm('Хотите посетить наш автосалон?') ?
         this.calc() : alert('ну, как хотите');
    }
    this.calc = function(){
        this.price = +prompt('Сколько стоит автомобиль(евро)?') || 10000;
        this.credit = confirm('Хотите авто взять в кредит?');
        if (this.credit == true) {
            this.time=+prompt('на сколько лет?');
        } else {
            return document.write('Вы нищий, сэр!');
        }
         kom = 0.25;
        if (this.time !='') {
            this.sum = this.price + (this.price*kom*this.time);
            this.result();
        } else { 
            document.write('Заного войдите в салон');
        }
        
    }
    this.result = function(){
        document.write(`Вы сделали заказ на приобритение в кредит автомобиля стиомостью в ${this.price} тысяч евро, сроком на ${this.time} лет, итого переплаты ${this.sum}`);
    }
}
let autoSalon = new Autopark();
// autoSalon.get();

let BuytFromHil = function(){
    Autopark.apply(this);
    let parentCalc = this.calc;
    let sthis=this;
    this.calc = function(){
        parentCalc.call(this);
        let kom2 = 0.15;
        if (this.time !='') {
            this.setsum();
            this.sum = this.price + (this.price*kom2*this.time);
        } else { 
            document.write('Вы не выбрали время');
            this.time=+prompt('на сколько лет?');
        }
        this.setsum = function(){
            document.write(`А у нас вы заказали авто стоимостью в ${this.price}, сроком на ${this.time} лет, итого переплаты ${this.sum}`)
        }
    }; 
}
let buytFromIgor = new BuytFromHil;
// console.log(buytFromIgor);

buytFromIgor.get();