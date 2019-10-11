import './dropdown.scss'
import './execute-panel/execute-panel'

window.onload = function () {

    (function () {

let input = document.querySelectorAll(".without-border-radius")
let shortDropdown = document.querySelectorAll(".short-dropdown")
let increment = document.querySelectorAll('.execute-panel__circle-increment')
let decrement = document.querySelectorAll('.execute-panel__circle-decrement')
let result = document.querySelectorAll('.execute-panel__result')
let clear = document.querySelectorAll('.short-dropdown__clear')
let long = document.querySelectorAll('.long-dropdowns')
let totalResult = 0;
console.log(result.length)

function checkResult () {
    for (let i=0; i < result.length; i++) {
        
    if (result[i].innerHTML === '0') {increment[i].style.opacity = 0}
    else {increment[i].style.opacity = 1
        
    }
    }
}

    checkResult ()

for (let i=0; i < input.length; i++) {
input[i].addEventListener('click', () => {
    shortDropdown[i].classList.toggle("will-hide");
})
}
for (let i=0; i < result.length; i++) {
    increment[i].addEventListener('click', () => {
        if (result[i].innerHTML>0) result[i].innerHTML = result[i].innerHTML - 1
        checkResult ()
    })
}
for (let i=0; i < result.length; i++) {
    decrement[i].addEventListener('click', () => {
        result[i].innerHTML = +result[i].innerHTML + 1
        checkResult ()
    })
}

for (let i=0; i < clear.length; i++){
    clear[i].addEventListener('click', () => {
        for (let j=0; j < result.length; j++) result[j].innerHTML = '0'
        checkResult ()
    })
}



})()

}







