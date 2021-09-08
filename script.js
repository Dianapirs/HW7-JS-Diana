let Contact = function() {
    this.get = function() {
        this.fio = prompt('Введите ФИО');
    this.fioCheck();
        this.age = +prompt('Введите Ваш возраст');
    this.ageCheck();
        this.phone = +prompt('Введите номер телефона');
    this.phoneCheck();
        this.email = prompt('Введите адрес электронной почты'); 
    this.emailCheck();
    this.show();
    }
    this.fioCheck = function() {
        let name = this.fio;
        function checkFio(name) {
            const regexFio = RegExp(/^[А-Я][а-я]+[а-я]+\s[А-Я][а-я]+\s[А-Я][а-я]+$/g);
            if(regexFio.test(name) !== true) {
                alert('Неверное ФИО');
                debugger
            }
        }
    checkFio(name);
    }

    this.ageCheck = function() {
        if(this.age < 18 && this.age > 140 || this.age === undefined || Number.isInteger(this.age) !== true){
            alert('Неверный возраст');
            debugger
        } 
    }
    this.phoneCheck = function() {
        let number = this.phone;
        function checkPhone(number) {
        const regexPhone = RegExp(/^\+?\d{1,3}([-(]{1})?\d{1,2}([-)]{1})?\d{5,12}$/g);
            if(regexPhone.test(number) !== true) {
                alert('Неверный номер');
                debugger
            }
        }

    checkPhone(number);        
    }
    this.emailCheck = function() {
        let mail = this.email;
        function checkEmail(mail) {
            const regexEmail = RegExp(/^[^\d]\w{2,}[_-]?\w+@([a-z]{2,7}.[a-z]{2,5})$/g);
                if(regexEmail.test(mail) !== true) {
                    alert('Неверный email');
                    debugger
                }
            }
    checkEmail(mail);
    }
    this.show = function() {
        console.log(this.fio + ', ' + this.age + ' лет, ' + 'контакты: ' + this.phone + ', ' + this.email);
    }
}

let contact1 = new Contact;
contact1.get();
