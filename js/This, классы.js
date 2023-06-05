// declaration and expression function
// function foo () {};
// const foo = function (){};

// arrow function
// const foo = () => {};
// Три типа функций существует. На что ссылаеться контекст this без use strict?
// function foo () {console.log(this)}; => windows
// foo()
// const boo = function (){console.log(this)}; => windows
// boo()
// const arrow = () => {console.log(this)}; => windows
// arrow ()
// Без use strict все будут ссылаться на глобальный объект windows
// А теперь посмотрим с use strict 

// 'use strict'

// function foo () {console.log(this)}; => undefined
// foo()
// const boo = function (){console.log(this)}; => undefined
// boo()
// const arrow = () => {console.log(this)}; => windows
// arrow ()
// Как узнать на кого ссылаеться this?
// 1. Мы смотрим на тип функции
// 2. Слева кто нас вызвал - ( в примере выше foo, boo слева нет никого поєтому и undefined)
// 3. Стрелочные функции ссылаються на windows
// This - доступен только в функциях
// =================================Примеры================================================
// const objA = {
//     name: 'Vlad',
//     nickName () {
//         console.log(this)
//     }
// };
// objA.nickName() => главное правило кто слева тот и вызвал, поэтому в консоли будет objA

// const objB = {
//     name: 'Vlad',
//     nickName: () => {console.log(this)}
// };
// objB.nickName() => а вот в стрелочных функциях хоть слева и стоит objB, все равно будет windows

// Вложенность, на что тут будет ссылаться this

// const objA = {
//     name: 'Vlad',
//     skills: {
//         mySkill: 'html',
//         nickName () {
//             console.log(this)
//         }
//     }
// };
// objA.skills.nickName() => ссылаеться на объект skills, ВСЕГДА то что слева
// =============================Важный пример======================================================
// const objA = {
//     name: 'Vlad',
//     skills: {
//         mySkill: 'html',
//         someValue: {
//             value: 10,
//             foo () {
//                 const nickName = () => {
//                     console.log(this)
//                 }
//                 nickName()
//             }
//         }
// }
// };
// objA.skills.someValue.foo() => ссылаться будет на someValue, потому что функция nickName находиться
// внутри функции foo - а эта функция являеться function declaration.
// ==========================Методы call, apply, bind=================================================
// const objA = {
//     name: 'A',
//     myAge(a, b) {
//         console.log(this, a, b)
//     }
// };
// objA.myAge(22,44)

// const objB = {
//     name: 'B',

// }
// objA.myAge.call(objB, 1, 2)

// apply - практически все тоже самое только аргументы передаются не в виде строки а массива так как с
// бекенда данные могут приходить в виде массива
// const objA = {
//     name: 'A',
//     myAge(a, b) {
//         console.log(this, a, b)
//     }
// };
// objA.myAge(22,44)

// const objB = {
//     name: 'B',

// }
// objA.myAge.apply(objB, [1, 2])
// ===========================================================================================
// bind - привязывает контекст в переменную
// const objA = {
//     name: 'A',
//     myAge(a, b, c, d) {
//         console.log(this, a, b, c, d);
//         return 'Some value'
//     }
// };
// const objB = {
//     name: 'B',
// };
// const result = objA.myAge.bind(objB) 
// // console.log(result) - в result копия функции myAge
// result(44,88,56,48);
// result(104,89,56,78);
// =============================================================================================
// =====================================Прототипное наследование================================
// const user = {
//     name: 'Vlad',
//     age: 36,
//     sayHello () {console.log(this.name);},
//     showAge () {console.log(`My age ${this.age}`);}
// }

// const user2 = Object.create(user)
// user2.name = "Julia"
// user2.skills = ['html', 'css', 'js']

// const user3 = Object.create(user2)
// user3.name = 'Artem'
// console.log(user3)
// // То есть идет унаследование свойст и методов по цепочке.
// Выведенно в консоль будет цепочка унаследованный и собственных свойств и методов.
// {name: 'Artem'}
// name: "Artem"
// [[Prototype]]
// : Object
// name: "Julia"
// skills: (3) ['html', 'css', 'js']
// [[Prototype]]
// : Object
// age: 36
// name: "Vlad"
// sayHello: ƒ sayHello()
// showAge: ƒ showAge()
// [[Prototype]]
// : Object
// =======================================Классы=============================================
// class User {
//     constructor (name, email, age = 18, location = 'World'){
// this.name = name;
// this.email = email;
// this.age = age;
// this.location = location;
//     }
//     // sayHello() {console.log('Hello Worls')}; => все методы идут в прототип
// }

// const test = new User('User A', 'test@gmail.com');
// console.log(test)
// test.sayHello()
// const test2 = new User('User B', 'test@gmail.com', 27, 'Lviv')
// console.log(test2)
// Тут важен порядок передачи аргументов, если не хочешь заморачиваться с порядком можно сделать
// деструктуризацию. Пример
// class User {
//     constructor ({name, email, age = 18, location = 'World'}){
// this.name = name;
// this.email = email;
// this.age = age;
// this.location = location;
//     }
//     sayHello() {console.log('Hello Worls')};
// }
// const test = new User({'User A', 'test@gmail.com'});
// ==================================================================================================
// class User {
//     #location
//     constructor (name, email, age = 18, location = 'World'){
// this.name = name;
// this.email = email;
// this.age = age;
// this.#location = location;
//     }
//     sayHello() {console.log('Hello Worls')};
//     #getEmail () {console.log(this.email)}
//     get mylocation () {return this.#location};
//     set mylocation (city) {this.#location = city};
// };
// Приватные свойства - #location
// С приватными свойствами и методами можно работать только внутри объекта класса в глобальной области они
// не доступны
// В гетере и сетере название нужно менять location => mylocation
// Как работать с приватными свойствами? Для этого есть get
// get - даёт доступ к свойству (не должно быть параметров())
// set - возвращает (изменяет) (обязательно должны быть параметры)

// const test = new User('User A', 'test@gmail.com');
// console.log(test)

// console.log(test.mylocation);
// test.mylocation = "Dnipro"
// console.log(test.mylocation)
// =====================================Наследование классов============================================

// class User {
// constructor (name, email, age = 18, location = 'World'){
// this.name = name;
// this.email = email;
// this.age = age;
// }
// sayHello() {console.log('Hello Worls')};
// };

// class Avatar extends User {
//     constructor (name, email, age, location, phone) {super(name, email, age, location,)
//         this.phone = phone;}
    
// };

// const test = new Avatar ('SuperAvatar', 'test@gmail.com', 16, 'kyiv', +380670000000);
// console.log(test)
// Аватар унаследовал все свойства Юзера кроме телефона так как мы его сделали собственным свойством



