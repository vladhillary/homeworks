let DOM = function(){
    
    this.create = function(tagName = prompt('typeName')){
        let createEl1 = document.createElement(`${tagName}`);
        return console.log(createEl1);
    }
    
    this.attr = function(elem2 = prompt('type tagName'), name = prompt('type attribute'), value = prompt('type value')){
        let createEl2 = document.createElement(`${elem2}`);
        createEl2.setAttribute(`${name}, ${value}`);
        return console.log(createEl2);
    }
    this.html = function(elem3 = prompt('type tagName'), value = prompt('type value')){
        let createEl3 = document.createElement(`${elem3}`);
        createEl3.textContent = `${value}`; 
        return document.write(`${createEl3}`); 
    }
    this.search = function(element = prompt('type tagName'), selector = prompt('type search')) {
        element.querySelector(selector);
        return element.querySelector(selector);
    }
    this.addClass = function(elem5 = prompt('type tagName'), className = prompt('type className')){
        let createEl5 = document.createElement(`${elem5}`);
        createEl5.classList.add(`${className}`);
        return console.log(createEl5);
    }
    this.removeClass = function(elem6 = prompt('type tagName'), className = prompt('type className')){
        let createEl6 = document.createElement(`${elem6}`);
        createEl6.classList.remove(`${className}`);
        return console.log(createEl6);
    }
    this.toggleClass = function(elem7 = prompt('type tagName'), className = prompt('type className')){
        let createEl7 = document.createElement(`${elem7}`);
        createEl7.classList.toggle(`${className}`);
        if(confirm('переключить toggle?')) createEl7.classList.toggle(`${className}`);
        return console.log(createEl7);
    }
    this.hasClass = function(element, className = prompt('type className')){
        let searchhas = element.querySelector(`.${className}`),
            has;
        if(searchhas != true){
            has = true
        } else false;
        console.log(has);
    }
    
    this.append = function(element, newElement, beforeElement){

        if(beforeElement != undefined) {element.insertBefore(newElement, beforeElement)
        } else element.appendChild(newElement);
        
    }
    this.on = function(element, eventname, funcName){
        element.addEventListener(eventName, function() {
            funcName();
        });
    }

}



let test = new DOM();
// test.create();
// test.attr(); error
// test.html(); error
// test.addClass();
// test.toggleClass();
// test.hasClass();
test.append();
test.on();
