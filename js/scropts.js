class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }

    set info(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.address = obj.address;
        this.phone = obj.phone
    }

    get info() {
        let dataUser = {
            id: this.id,
            name: this.name,
            email: this.email,
            address: this.address,
            phone: this.phone
        }
        return dataUser;
    }
}

class Contacts {
    constructor() {
        this.dataContacts = [];
    }

    add(data) {
        this.dataContacts.push(new User(data));
    }

    edit(id, obj, newList) {
        this.dataContacts.forEach((element) => {

            if (element.id == +id) {
                element.name = obj.name;
                element.email = obj.email;
                element.address = obj.address;
                element.phone = obj.phone;

                newList.previousElementSibling.previousElementSibling.innerHTML = `<div class="wrapper">
                <span>Name: ${obj.name}</span> <br>
                <span>Email:${obj.email}</span><br>
                <span>Phone:${obj.phone}</span><br>
                <span>Address:${obj.address}</span><br></div>
                `
            }
        })

        this.Reset();
    };

    remove(id) {
        this.dataContacts.forEach((element, index) => {
            if (element.id == id) {
                this.dataContacts.splice(index, 1);
            }
        })
        this.Reset();
    }
    get() {
        return this.dataContacts;
    }
    Reset() {

        document.querySelector('input[name="fullName"]').value = '';
        document.querySelector('input[name="email"]').value = '';
        document.querySelector('input[name="address"]').value = '';
        document.querySelector('input[name="phone"]').value = '';
    }
}

let contactList = new Contacts();

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.setData();
        this.onAdd();

    }

    onAdd() {
        let divApp = document.querySelector('.app');
        this.app = divApp.appendChild(document.createElement('div'));
        this.app.classList.add('app_block');

        let form = document.createElement('form');
        form.innerHTML = `<form  method="post">
        <div class="input_wrapper">
            <input type="text"  placeholder="fullName" name ="fullName">
            <input type="email" placeholder="email" name ="email">
            <input type="text" placeholder="address" name ="address">
            <input type="tel" placeholder="phone" name ="phone">
            <div class="btn_wrapper"><button class="btn_add" type="button">Add this Contact</button>
            <button class="btn_clear" type="button">Clear</button></div>
            
            </div>
            </form>`;
        this.app.appendChild(form);

        let btn_clear = document.querySelector('.btn_clear');
        btn_clear.addEventListener('click', () => {
            this.Reset();
        })

        let btn_add = document.querySelector('.btn_add');
        btn_add.addEventListener('click', () => {
            let fullName = document.querySelector('input[name="fullName"]').value,
                email = document.querySelector('input[name="email"]').value,
                address = document.querySelector('input[name="address"]').value,
                phone = document.querySelector('input[name="phone"]').value,
                id = Date.now();

            let cData = {};
            if (fullName != '' && email != '' && address != '' && phone != '') {
                cData.id = id;
                cData.name = fullName;
                cData.email = email;
                cData.address = address;
                cData.phone = phone;
                this.add(cData);
                this.addStorage(cData);
            }

            this.Reset();
            this.onShow();
            this.addEvent();

        })
    }

    onShow() {

        let app_block = document.querySelector('.contact');
        app_block.innerHTML = '';

        this.get().forEach(function (element) {
            let list = document.createElement('div');
            list.classList.add('list');
            list.innerHTML = `
            <div class="wrapper"><span>Name: ${element.name}</span><br>
            <span>Email:${element.email}</span><br>
            <span>Phone:${element.phone}</span><br>
            <span>Address:${element.address}</span><br></div>
            <a href="tel:${element.phone}" class="btn_call" type="button">Call</a>
            <button class="btn_edit" id="${element.id + 1}" type="button">edit</button>
            <button class="btn_remove" id="${element.id}" type="button">remove</button>`;
            app_block.appendChild(list);
        })
        this.app.appendChild(app_block);

    }

    addEvent() {


        let btn_remove = document.querySelectorAll('.btn_remove');
        btn_remove.forEach((element) => {
            element.addEventListener('click', (event) => {
                element.parentElement.remove();
                this.remove(event.target.id);
                console.log(event.target.id)
                this.removeStorage(event.target.id);
            })
        })

        let btn_edit = document.querySelectorAll('.btn_edit');
        btn_edit.forEach((element) => {
            element.addEventListener('click', (event) => {
                let nameEdit = document.querySelector('input[name="fullName"]').value;
                let emailEdit = document.querySelector('input[name="email"]').value;
                let addressEdit = document.querySelector('input[name="address"]').value;
                let phoneEdit = document.querySelector('input[name="phone"]').value;

                let obj = {};
                obj.id = event.target.id;
                obj.name = nameEdit;
                obj.email = emailEdit;
                obj.address = addressEdit;
                obj.phone = phoneEdit;

                let newList = event.target;
                this.edit(obj.id - 1, obj, newList)
                this.storage = obj;
            })

        })

    }
    addStorage(cData) {

        let contactStore = JSON.parse(window.localStorage.getItem('contactStore')) || [];
        contactStore.push(cData);
        localStorage.setItem('contactStore', JSON.stringify(contactStore));
    }

    get storage() {
        return window.localStorage;
    }

    set storage(obj) {
        let cStorage = JSON.parse(this.storage.getItem('contactStore'));
        if (!cStorage) {
            return;
        } else {
            cStorage.forEach((element) => {
                if (element.id == obj.id - 1) {
                    element.id = obj.id - 1;
                    element.name = obj.name;
                    element.email = obj.email;
                    element.address = obj.address;
                    element.phone = obj.phone;
                }
            })

        }
        window.localStorage.removeItem('contactStore');
        localStorage.setItem('contactStore', JSON.stringify(cStorage));

        this.setCookie(cStorage);

    }
    removeStorage(id) {
        
        let dStorage = JSON.parse(this.storage.getItem('contactStore'));
    
            dStorage.forEach((element, index) => {
                if (element.id == id) {
                    dStorage.splice(index, 1);
                }
            })

        window.localStorage.removeItem('contactStore');
        localStorage.setItem('contactStore', JSON.stringify(dStorage));
        if (dStorage.length == 0) window.localStorage.removeItem('contactStore');
        this.setCookie(dStorage);
    }
    setCookie(obj) {

        document.cookie = `storageExpiration=` + encodeURIComponent(obj) + `; max-age =86400`;
        this.clearStorage();
    }
    setData() {
        if (window.localStorage.length == 0) {
            this.getData();
        }

    }
    async getData() {

        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((respons) => {
                return respons.json()
            }).then((dataApi) => {
                window.localStorage.setItem('contactStore', JSON.stringify(dataApi));

                dataApi.forEach((element) => {
                    this.dataContacts.push(element);
                })

                this.onShow();
                this.addEvent();
                this.setCookie(dataApi);
                return dataApi;

            })

    }
    clearStorage() {

        if (document.cookie.length == 0) {
            window.localStorage.clear();
        }
    }

}
let contactBook = new ContactsApp();



