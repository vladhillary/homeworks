let Autopark = function () {
    this.get = function(){
        this.facecontrol = confirm('Хотите посетить наш автосалон?') ?
         this.calc() : alert('ну, как хотите');
    }
    this.calc = function(){
        this.price = +prompt('Сколько стоит автомобиль(евро)?');
        this.credit = confirm('Хотите авто взять в кредит?') ? this.time=+prompt('на сколько лет?') : document.write('Вы нищий, сэр!');
        this.const = 0.25;
        if (this.time !='') {this.sum = this.price + (this.price*this.const*this.time);}
        this.result();
    }
    this.result = function(){
        document.write(`Вы сделали заказ на приобритение в кредит автомобиля стиомостью в ${this.price} тысяч евро, сроком на ${this.time} лет, итого переплаты ${this.sum}`);
    }
}
let autoSalon = new Autopark();
autoSalon.get();