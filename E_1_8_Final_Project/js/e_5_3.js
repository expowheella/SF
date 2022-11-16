// import "../css/style.css";

// alert("Не пугайтесь! Просто нажмите кнопку ОК")

const div = document.getElementById("t-1");

div.innerHTML = "my new link";

div.setAttribute("title", "Привет, чувак!");

div.style = "font-size: 40px; text-align: center; color: red"

//
//


/** There are several ways to add element in DOM: */
// 
// 1. create an element
const newDiv = document.createElement("div");

// fill in the element
newDiv.innerHTML = "<span id = \"customOne\">Привет!</span>";

// add the element to the parent element in DOM */ 
// find parent
const parent = document.getElementById("t-1");
// add the element
document.body.insertBefore(newDiv, parent);
newDiv.style = "text-align: center; font-size: 40px; color: green";


//
// 2. add an element using innerHTML
const content = "Как дела?";

const contentParent = document.getElementById("t-1");
contentParent.style = "text-align: left; font-size: 20px; color: blue";
contentParent.innerHTML =  
    `<div><span id = "custom">${content}</span></div>`;

/** 3. inserAdjacentHTML(position, content)
 *  'beforebegin': до самого element (до открывающего тега);
 *  'afterbegin': сразу после открывающего тега element (перед первым потомком);
 *  'beforeend': сразу перед закрывающим тегом element (после последнего потомка);
 *  'afterend': после element (после закрывающего тега).
*/
const content2 = "I like JS!"
const parent2 = document.getElementById("t-1");
parent2.insertAdjacentHTML('afterend', 
    `<div><span id="custom">${content2}</span></div>`);


// 
// Удаление элемента
// elem.removeChild(child)
const toRemove = document.getElementById("customOne")
const toRemoveElementParent = toRemove.parentNode


window.setTimeout(slowAlert, 4000)
function slowAlert() {
    // alert("Слово \"Привет\" будет удалено");
    toRemoveElementParent.removeChild(toRemove)
  }
