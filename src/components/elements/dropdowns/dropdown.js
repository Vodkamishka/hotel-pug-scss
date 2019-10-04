import './dropdown.scss'
import './execute-panel/execute-panel'

window.onload = function() {

let input = document.querySelectorAll(".without-border-radius");
let shortDropdown = document.querySelectorAll(".short-dropdown");
let increment = document.querySelectorAll('.execute-panel__circle-increment');
let decrement = document.querySelectorAll('.execute-panel__circle-decrement');
let result = document.querySelectorAll('.execute-panel__result')


for (let i=0; i < input.length; i++) {
input[i].addEventListener('click', () => {
    shortDropdown[i].classList.toggle("will-hide");
    
})
}
for (let i=0; i < result.length; i++) {
    increment[i].addEventListener('click', () => {
        if (result[i].innerHTML>0) result[i].innerHTML = result[i].innerHTML - 1
    })
}
for (let i=0; i < result.length; i++) {
    decrement[i].addEventListener('click', () => {
        result[i].innerHTML = +result[i].innerHTML + 1
    })
}









}