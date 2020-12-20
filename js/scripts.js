let DOM = function(){
    
    this.create = function(tagName){
        let createEl1 = document.createElement(`${tagName}`);
        return createEl1;
    }
    
    this.attr = function(element, name , value){
        let createEl2 = document.createElement(`${element}`);
        createEl2.setAttribute(`${name}, ${value}`);
        return createEl2;
    }
    this.html = function(elem3, value){
        let createEl3 = document.createElement(`${elem3}`);
        createEl3.innerHTML = `${value}`; 
        return createEl3; 
    }
    this.search = function(selector, element) {
        let elbody;
        if(document.body.querySelector(selector)) {
            return elbody = document.body.querySelector(selector);
        } else return element.querySelector(selector);
    }
    this.addClass = function(elem5, className){
        let createEl5 = document.querySelector(elem5);
        createEl5.classList.add(`${className}`);
        return createEl5;
    }
    this.removeClass = function(elem6 , className){
        let createEl6 = document.querySelector(elem6);
        createEl6.classList.remove(`${className}`);
    }
    this.toggleClass = function(elem7, className){
        let createEl7 = document.querySelector(`${elem7}`);
        createEl7.classList.toggle(`${className}`);
    }
    this.hasClass = function(element, className){
        let searchhas = element.classList.contains(className),
            has;
        if(searchhas == true){
            has = true;
        } else false;
        return has;
    }
    
    this.append = function(element, newElement, beforeElement){

        if(beforeElement != undefined) {
            element.insertBefore(newElement, beforeElement)
        } else element.appendChild(newElement);
        
    }
    this.on = function(element, eventName, funcName){
        element.addEventListener(eventName, function() {
            funcName();
        });
    }

}



let test = new DOM();
test.create();
test.attr(); 
test.html();
test.addClass();
test.toggleClass();
test.hasClass();
test.append();
test.on();
