// ==============================Деструктуризация============================================
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one);
// console.log(two);
// console.log(three);
// const [ , two, three] = arr; если ненужен какой либо элемент можно поставить пробел
// console.log(two);
// console.log(three);

// const user = {
//     name: 'Vlad',
//     age: 36,
//     skills: {
//         html: false,
//         css: false,
//         js: true,
//         cars: {
//             audi: 'a6',
//             bmw: 'x6'
//         }
//     }
// };
// const {name, age} = user;
// console.log(name, age);
// =========================================================================
// Как поменять название ключа при деструкт. объекта?
// const {name: userName, age} = user; => мы меняем name на userName, дальше по коду будет ключ userName
// console.log(userName);
// ========================================================================
// Вложенная деструктуризация:
// const { name, age, skills: {html, css, js}} = user;
// console.log(html, css, js)
// const {name, age, skills: {cars: {bmw}}} = user; => глубокая деструктуризация
// console.log(bmw);
// ========================================================================

// const user = [
//     {
//         name: 'Vlad',
//         age: 36,
//         car: 'bmw'
//     },
//     {
//         name: 'Artem',
//         age: 37,
//         car: 'audi'
//     }, {
//         name: 'Vladimir',
//         age: 30,
//         car: 'toyota'
//     },
// ]

// for (const {name,age,car} of user) {
//     console.log(name);
//     console.log(age);
//     console.log(car);
// };

// function foo ({name,age,car}) {
//     console.log(name)
// }

// foo(
//     {
//     name: 'Vlad',
//     age: 36,
//     car: 'bmw'
//     }
// ); => Деструктуризация в функциях

// =====================================Spred============================================
// const arr1 = [1,2,3,4,5];
// const min = Math.min(...arr1)
// console.log(min);

// const arr1 = [1,2,3,4,5];
// arr2 = [...arr1];
// console.log(arr2);

// let arr1 = [ 5, 2, 8, 16];
// let arr2 = [20, 17,...arr1, 24];
// console.log(arr2)
// Spread - распыляет на отдельные части
// Rest - собирает
// ==================================Rest=================================================
// function foo (a,...b) {
//     console.log(a);
//     console.log(b);
// };

// foo(1,2); а = 1, б = 2
// foo(1,2,3,4); а=1, б = 2,3,4
