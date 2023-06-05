// Асиннхронность реализовання в самом браузере, в JS как таковом асинхронных методов нет
// Реализация асинхронна в браузере идет за счет WebAPI
// Весь асинхронный код будет реализован тольео после синхронного
// const date = new Date(); => текущее время
// console.log(date);
// const currentDate = Date.now(); => время с 1 января 1970 г.
// console.log(currentDate);

// const date = new Date();
// console.log(date.getMonth()) => месяцы начинаються с 0 как в массивах
// ==================================Промисы==============================================
// const promise = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         const value = Math.random();
//         if (value > 0.5) {resolve ('Yahoo')
    
//         } else {reject ('OH Noooo') 
    
//         };}, 3000)
    
// });
// console.log(promise)

// promise.then().catch().finally() => обработка промиса
// then => принимает 2 колбек функции для обработки resolve, reject НО плохая практика обрабатывать reject в then

// promise
// .then((value) => {console.log(value)})
// .catch((err) => {console.error(err)})
// .finally(() => {})

// value - в данном случае это resolve, 'Yahoo'
// err - reject 'OH Noooo'
// =======================================================================================
// promise
// .then((value) => {return value + '💩'})
// .then ((value) => {console.log(value)})
// .catch((err) => {console.error(err)})
// .finally(() => {})
// Первый then возвращает промис а вот второй then возвращает уже результат
// =================================Пример использовании с методом fetch()=================
// const promise = fetch ('https://pokeapi.co/api/v2/pokemon/ditto');

// promise.then(response => console.log(response)).catch(err => console.error(err)) в данном случае мы получили ответ от бекэнда наш response в виде объекта

// promise
// .then(response => response.json())
// .then((data) =>{console.log(data)})
// .catch(err => console.error(err))
