// const title = document.querySelector('h1'); => по тегу
// const title = document.querySelector('#title'); => по ид
// Для вывода в консоль ДОМ элементов используем console.dir() - отображ. как объект
// ДОМ элементы представленны в виде объектов поэтому работать с ними можно как с объектами
// const title = document.querySelector('.js-title');
// console.dir(title);
// console.dir(title.textContent);
// title.textContent = 'Hello JS';
// console.log(title.textContent)
// =========================================Работа с классами====================================
// У элементов есть свойство classList
// const title = document.querySelector('.js-title');
// console.dir(title);
// title.classList.add('title-color'); => добавить класс
// title.classList.remove('title-color'); => удалить класс
// title.classList.toggle('title-color'); => добавить если нет класса, удалить если есть
// ВАЖНО можно добавлять инлайн стили но єто плохая практика так как рендерится вся страница(интерпритатор не может изменить 1 элемент на странице, он просматривает все стили и меняе указанный). Пример ниже
// title.style.color = 'blue'
// =================================DataSet====================================================
// В свойсте dataset - находятся дата атрибуты
// АТРИБУТЫ делятся на 2 группы
// 1. Системные - hidden, disable, id - нужны для взаимодействия с страницей или например как ид для того что бы вытащить элемент в js. У системных атрибутов есть свои значения, например у hidden есть значение true под капотом.
// 2. Дата атрибуты - нужны для сохранения какой либо информации (например ид товара)
// const title = document.querySelector('.js-title');
// console.dir(title.dataset.id); => title
// console.dir(title.dataset.goods); => apple 
// console.log(title.id) => выведется значение ид, так как это системный атрибут
// Как работать с системными атрибутами? Пример с атрибутом hidden
// title.hidden = true; => уберет элемент со страницы
// title.hidden = false; => вернет элемент обратно
// также есть методы для работы с атрибутами но их используют реже. Пример
// console.log(title.getAttribute('id'));
// console.log(title.getAttribute('data-goods'));
// title.setAttribute('hidden', 'true');
// title.removeAttribute('hidden', 'false')
// ===================================Работа со списком и навигацией по ДОМ=========================
// const list = document.querySelector('.js-list');
// console.dir(list.children);
// console.log([...list.children]) = > если нужно перебрать элементы то мы их распыляем в массиве

// const li = document.createElement('li')
// li.textContent = list.children.length + 1;
// list.append (li)
// console.log(li)
// =================================Метод шаблонных строк===========================================
// const li = `<li>${list.children.length + 1}</li>`;
// list.insertAdjacentHTML('beforeend', li)
// ==================================Живая и неживая коллекция======================================
// const list = document.querySelector('.js-list');
// const listStatic = document.querySelectorAll('li'); статический метод
// const listDynamyc = document.getElementsByTagName('li') динамический

// const li = document.createElement('li');
// li.textContent = list.children.length + 1;
// list.append(li);
// console.log('listStatic', listStatic); => querySelectorAll - забирает элементы в моменте их взятия
// console.log('listDynamyc', listDynamyc); => getElementsByTagName - возвращает всегда актуальные данные, даже после добавления элементов в ДОМ
// ======================================Задача===================================================
// const cars = [
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 4,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const container = document.querySelector('.js-container');
// console.dir(container)

// const markup = cars.map(({id, model, type, price, img}) => `<li>
//     <img src="${img}" alt="${model}" class="image"></img>
//     <h2>Марка - ${model}</h2>
//     <h3>Модель - ${type}</h3>
//     <p>Ціна - ${price}</p>
// </li>`).join('');
// console.dir(markup)
// container.insertAdjacentHTML('beforeend', markup)

// join - используеться так как мы пытаемся добавить массив а метод insertAdjacentHTML принимает 2 параметром строку.

// container.innerHTML = ""; => лучший способ удалить разметку

// =========================================СОБЫТИЯ==============================================
// const button = document.querySelector('.click');
// const container = document.querySelector('.js-container');
// button.addEventListener('click', onClick);

// let step = 0;
// function onClick (evt) {
//     step += 5;
//     container.style.marginLeft = `${step}px`;
//     console.log(evt.currentTarget)};
// evt.currentTarget => это текущий элемент на который мы повесили слушателя, в нашем примере кнопка

// const input = document.querySelector('.js-input');
// input.addEventListener('input', onInput)
// function onInput (evt) {
//     console.dir(evt.currentTarget.value)
// } 

// input.addEventListener('change', onInput)
// function onInput (evt) {
//     console.dir(evt.currentTarget.value)
// }
// Если видиш форму то событие будет сабмит и обязательно используй evt.preventDefault() что бы не перезагружалась страница
// const formEl = document.querySelector('.js-form');
// formEl.addEventListener('submit',onSubmit);

// function onSubmit (evt){
// evt.preventDefault()
// const {userNumber, userEmail,userFirstname} = evt.currentTarget.elements;
// // console.dir(evt.currentTarget)
// // console.log(userNumber.value)
// // console.log(userEmail.value)
// // console.log(userFirstname.value)

// const data = {
//     name: userFirstname.value,
//     email: userEmail.value,
//     number:userNumber.value,
// }
// console.log(data)
// };
// ==========================События клавиатуры============================================
// События клавиатуры вешаются на всю страницу по этому начинаеться с документ
// document.addEventListener('keydown',onKey);
// function onKey(evt) {
//    console.log(evt.code) => работаем почти всегда с evt.code
// }
