/** Работа с событиями */

function clickMe() {
    alert('Clicked!')
}

function clickMeTwice() {
    alert('Second handler works')
}

// Вызов функции clickMe из HTML:
// <button id="mybutton2">Button 2</button>
mybutton2.onclick = clickMe

btnbtn.addEventListener('click', clickMe);
btnbtn.addEventListener('click', clickMeTwice);