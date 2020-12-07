
let taskList = function(){
//create ToDoList

let toDoList = document.createElement('div'),
    wrapper = document.createElement('div');
wrapper.style.cssText = 'margin: 50px 0px 0px 50px;width: 175px; height: 100%;';
document.body.appendChild(wrapper);
toDoList.innerHTML='ToDo List';
wrapper.appendChild(toDoList);
toDoList.style.cssText='margin: 50px 0px 5px 0px; background-color: blue; color: white; width: 175px; height: 20px; text-align:center; font-weight: bold;';
let input = document.createElement('input'),
    form = document.createElement('form');
    wrapper.appendChild(form);
    input.setAttribute('placeholder', 'type your task..');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'taskname');
    input.style.cssText = 'width: 167px; margin-bottom: 5px;';
    form.appendChild(input);
let cleartask = document.createElement('button');
cleartask.innerHTML='Clear Tasks';
cleartask.setAttribute('type', 'clear');
cleartask.style.cssText = 'width: 175px;  background-color: green; color: white;text-align:center; font-weight: bold; outline: none;'
form.appendChild(cleartask);
let sthis = this;
let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
.opa {
    opacity: 0.33;
}
`


//Event

input.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        event.preventDefault();
    sthis.add(event.target.value);
    } else {
        return;
    }
})
    this.add = function(task){
        let noUl = document.querySelector('ul');
        if (!noUl){
            elUl = document.createElement('ul');
            elUl.style.cssText ='list-style-type:decimal;';
            wrapper.appendChild(elUl);
            
        }
            elLi = document.createElement('li');
            elLi.innerHTML = `${task}`;
        elUl.appendChild(elLi);
        elLi.style.cssText = 'position: relative;'
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.style.cssText = 'position: absolute; left: -40px;'
        elLi.appendChild(checkbox);
        checkbox.addEventListener('click', function(){
            elLi.classList.toggle('.opa');
        })
        let edit = document.createElement('button');
        edit.style.cssText = 'background-color: red; outline: none; height: 15px; width: 10px; margin-left: 5px;'
        elLi.appendChild(edit);
        edit.addEventListener('click', function(){
            elLi.innerHTML=prompt('Изменение задачи');
            elLi.appendChild(checkbox);
        } )
    }
//clear
   let clear = document.querySelector('button');
    clear.addEventListener('click', function(event){
        event.preventDefault();
        elUl.innerHTML = '';
        input.value = '';
    })
}
confirm('Открыть список задач?') ? taskList() : alert('Можно и отдохнуть!');
