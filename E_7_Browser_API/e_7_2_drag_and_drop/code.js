// Самый универсальный метод поиска – это elem.querySelectorAll(css),
// он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.
const square = document.querySelector(".square");
const heart = document.querySelector(".heart");

// Также, можно получить документ по названию тега,
// но тогда вернуться все элементы с таким тегом
let test_square = document.getElementsByTagName("div")[0];

// turn of default drag&drop
square.ondragstart = () => false;
// heart.ondragstart = () => false;

// onmousedown - вызывается функция при нажатии на элемент (на квадрат)
square.onmousedown = function (event) {
  square.style.position = "absolute"; // ?
  console.log(square.style.position);

  square.style.zIndex = 1000;

  document.body.append(square);

  // установим абсолютно спозиционированный square под курсор
//   moveAt(event.pageX, event.pageY);
  console.log(event.x, event.pageX);

  // передвинуть square под координаты курсора
  // сдвиг на половину ширины: pageX - square.offsetWidth / 2
  // сдвиг на половину высоты: pageY - square.offsetHeight / 2
  function moveAt(pageX, pageY) {
    square.style.left = pageX - square.offsetWidth / 2 + "px";
    square.style.top = pageY - square.offsetHeight / 2 + "px";
  }

  function onMouseMove(event) {
    console.log(event)
    moveAt(event.pageX, event.pageY) // передаем новые координаты мышки
  }
  onMouseMove(event)

  document.addEventListener('mousemove', onMouseMove);

};





  //
const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  btn.classList.toggle('btn--magic');
});