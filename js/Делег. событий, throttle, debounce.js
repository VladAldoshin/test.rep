// console.log(_.throttle);

// const input = document.querySelector('.js-input');
// input.addEventListener('input',_.throttle(onSearch, 600));
// function onSearch(evt) {
//     console.log(evt.target.value)
// };
// Для того что бы использовать метод тротл нужно указать колбек функцию и милисекунды как в примере выше. И еще ВАЖНО неиспользуеться currentTarget используеться target.

// const input = document.querySelector('.js-input');
// input.addEventListener('input',_.debounce(onSearch, 800));
// function onSearch(evt) {
//     console.log(evt.target.value)
// };
// ==================================Пример==========================================================
// const input = document.querySelector('.js-input');
// const PASSWORD_LENGTH = 7;
// input.addEventListener('input', _.debounce(onSearch,400));
// function onSearch(evt) {
//     if (evt.target.value.trim().length < PASSWORD_LENGTH) {
//         evt.target.classList.add('invalid');
//         evt.target.classList.remove('valid');
//     } else {
//         evt.target.classList.add('valid'); 
//         evt.target.classList.remove('invalid');
// };
// };