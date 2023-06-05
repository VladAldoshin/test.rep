// function foo (callback) {
//     console.log('callback', callback)
//     callback(10)
// };
// function logger (value) {
//     console.log('logger', logger)
//     console.log(value)
// };
// foo(logger)
// ===========================================================================
// const arr = [1,2,3,4,5,6];

// function each (arr, callback){
//     let total = 0
//     for(const item of arr) {
//         total = callback(total,item);
        
//     }
//     return total
// }


// function add (first, second){
//     return first + second
// };

// function sum (first, second) {
//     return first * second
// };
// console.log(each(arr, add));
// console.log(each(arr, sum));
// ======================================================================================

// // Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   }
  
//   // Функция высшего порядка
//   function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);
// ======================================================================================
// ===================================forEach============================================
// const arr = [ 2, 7, 9, 14, 18];
// // value - итерируемый элемент в массиве
// // index - индекс - необязательный параметр
// // array - массив - необязательный параметр
// arr.forEach((value, index, array) => {
//   arr[index] = value * 2;
// })
// console.log(arr)

// const numbers = [5, 10, 15, 20, 25];
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Индекс ${i}, значение ${numbers[i]}`);
//   }
  
//   // Перебирающий forEach
//   numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
//   });
// ====================================Стрелочные функции====================================

// function declaretion 
// function foo(a,b) {
//     console.log( a + b)
// }
// foo(2,2)

// function expression
// const foo = function (a,b) {
//     console.log(a + b)
// };

// foo(2,2)

// Arrow function
// // Обычное объявление функции
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
//   // Тоже самое как стрелочная функция
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };
// ===================================Переберающие методы массива================================
// --------------Map-------------
// const arr = [1,2,3,4,5,6]
// const result = arr.map((value, index, array) => value * 2);
// console.log(result)

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// const result = planets.map((value) => value + '!');
// console.log(result)
// -----------flatMap---------------------
// const arr = [
//     {
//         user: 'User1',
//         skills: ['html', 'css']
//     },
//     {
//         user: 'User2',
//         skills: ['js', 'node.js']
//     },
//     {
//         user: 'User3',
//         skills: ['react', 'express']
//     },
// ];

// const result = arr.flatMap((value, index, array) => value.skills);
// console.log(result)

// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
//   ];

// const result = students.flatMap((value) => value.courses);
// console.log(result)
// -----------find-------------------------------------------
// const arr = [1,12,18,36,78]
// const result = arr.find((value) => value > 5);
// console.log(result)

// const arr = [
//         {
//             user: 'User1',
//             skills: ['html', 'css']
//         },
//         {
//             user: 'User2',
//             skills: ['js', 'node.js']
//         },
//         {
//             user: 'User3',
//             skills: ['react', 'express']
//         },
//     ];
// const result = arr.find((value) => value.skills.includes('js')).user;
// console.log(result)
// ---------------find index---------------------------------------
// const arr = [
//         {
//             user: 'User1',
//             skills: ['html', 'css']
//         },
//         {
//             user: 'User2',
//             skills: ['js', 'node.js']
//         },
//         {
//             user: 'User3',
//             skills: ['react', 'express']
//         },
//     ];
// const result = arr.findIndex(value => value.skills.includes('node.js'))
// console.log(result); - вернет индекс объекта в котором есть node.js
// ---------------filter-------------------------------------------
// const arr = [1,2,3,6,8,9]
// const result = arr.find(value => value === 6);
// console.log(result)
// -----------------every and some---------------------------------
// const arr = [1,3,9,8,5];
// const result = arr.some(value => value <= 0);
// console.log(result)

// const result = arr.every(value => value >= 0);
// console.log(result)

// const result = arr.every(value => !(value % 2));
// console.log(result)

// const arr = [
//             {
//                 user: 'User1',
//                 age: 18
//             },
//             {
//                 user: 'User2',
//                 age: 27
//             },
//             {
//                 user: 'User3',
//                 age: 39
//             },
//         ];

// const usersAdult = arr.every(user => user.age >= 18);
// console.log(usersAdult);
// --------------------sort----------------------------------
// const numbers = [12, 48, 89, 25];
// const result = numbers.sort((a, b) => a - b);
// console.log(result) - возвращает массив по возростанию
// а - текущий элемент в массиве
// б - следующий
// метод сорт изменяет(мутирует оригинальный массив), что бы не изменять массив можно так сделать
// const numbers = [12, 48, 89, 25];
// const result = [...numbers].sort((a, b) => a - b);
// console.log(result)
// Сортировка строк по алфавиту, все буквы имеют номер по юникоду поэтому нужно сортировать,
// по другому принципу чем цифры.
// const str = ['A','k','H','x','O']
// const result = str.sort((a, b) => a.localeCompare(b)); - по алфавиту
// console.log(result)

// const result = str.sort((a, b) => b.localeCompare(a)); - не по алфавиту
// console.log(result)

// const arr = [
//             {
//                 name: 'Alex',
//                 age: 18
//             },
//             {
//                 name: 'Igor',
//                 age: 27
//             },
//             {
//                 name: 'Max',
//                 age: 39
//             },
//         ];
//         const result = arr.sort((a, b) => a.name.localeCompare(b.name));
//         console.table(result)
// --------------reduce------------------------------------------------------
// const str = [1, 10, 25, 87, 98];
// const result = str.reduce((acc, currentValue) => {
//     console.log('acc', acc);
//     console.log('currentValue', currentValue);
//     console.log('----------------------------------');
//     return acc + currentValue
// },0)

// const arr = [1, 10, 25, 87, 98];
// const result = arr.reduce((acc, currentValue) => {
//     acc.push(currentValue * 2)
//     return acc
// }, [])
// console.log(result)