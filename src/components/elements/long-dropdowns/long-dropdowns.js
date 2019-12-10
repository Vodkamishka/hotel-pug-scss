import './long-dropdowns.scss';
import '../execute-panel/execute-panel';
import '../input/input';

class Dropdowns {
    constructor (el) {
        this.dropdown = el
        this.input = el.querySelector('input')
        this.shortDropdown = el.querySelector('.short-dropdown')
        this.increment = el.querySelectorAll('.execute-panel__circle-increment')
        this.decrement = el.querySelectorAll('.execute-panel__circle-decrement')
        this.result = el.querySelectorAll('.execute-panel__result')
        this.clear = el.querySelector('.short-dropdown__clear')
        this.init()
    }
    init = () => {
        this.bindInput()
        this.bindIncrement()
        this.bindDecrement()
        this.clearAll()
        this.drawDecrementAndInput()
    }
    setGuestsInInput = (result, input) => {
        let array = []
        let peoples = ['взрослые', 'младенцы']
        function returnedTrueWord (name, num) {
            let word
            if (num > 20) {num %= 10}
                if (num === 0 || num > 4 && num<= 20) {word = (name === 'guests') ? ' гостей' : ' младенцев'}
                else if (num === 1) {word = (name === 'guests') ?  ' гость' : ' младенец'}
                else {word = (name === 'guests') ?  ' гостя' : ' младенца'}
            return word    
        }
        let humans = [returnedTrueWord('guests', +result[0].innerHTML + +result[1].innerHTML), returnedTrueWord('baby', +result[2].innerHTML)]
        let humansNumber = [+result[0].innerHTML + +result[1].innerHTML, +result[2].innerHTML]
        peoples.forEach((el, index) => {
            if (humansNumber[index] === 0) return
            array.push(humansNumber[index] + ' ' + humans[index])
        })
        this.input.value = array.join(', ') 
    }
    setBedsInInput = (result, input) => {
        let array = []
        let rooms = ['Спальни', 'Кровати']
            function returnTrueWord (name, num) {
                let bed
                if (num > 20) {num %= 10}
                    if (num === 0 || num > 4 && num<= 20) {bed = (name === 'спальни') ? ' спален' : ' кроватей'}
                    else if (num === 1) {bed = (name === 'спальни') ?  ' спальня' : ' кровать'}
                    else {bed = (name === 'спальни') ?  ' спальни' : ' кровати'}
                return bed    
            }
            let goods = [returnTrueWord('спальни', +result[0].innerHTML), returnTrueWord('кровати', +result[1].innerHTML)]  
        rooms.forEach((el, index) => {
            array.push(result[index].innerHTML + ' ' + goods[index])
        })
        this.input.value = array.join(', ') + '...'
    }  
    bindInput = () => {
        this.input.addEventListener("click", () => {
            this.shortDropdown.classList.toggle("will-hide")
        })
    }
    drawDecrementAndInput = () => {
        this.result.forEach((el, index) => {
            if (el.innerHTML === '0') {
                this.decrement[index].style.opacity = 0
            }
            else {
                this.decrement[index].style.opacity = 1
            }
            if (this.dropdown.classList.contains('long-dropdowns')) {
                this.setGuestsInInput (this.result, this.input)
            }
            else {
                this.setBedsInInput (this.result, this.input)
            }
       })
    }
    bindIncrement = () => {
        this.increment.forEach(el => {
            el.addEventListener('click', () => {
                let result = el.previousElementSibling
                result.innerHTML = +result.innerHTML + 1

                this.drawDecrementAndInput()
            })
        })
    }
    bindDecrement = () => {
        this.decrement.forEach(el => {
            el.addEventListener('click', () => {
                let result = el.nextElementSibling;
                if (result.innerHTML > 0) result.innerHTML = result.innerHTML - 1

                this.drawDecrementAndInput ()
            })
        })    
    }
    clearAll = () => {
        if (this.clear) {this.clear.addEventListener('click', () => {
            this.result.forEach(el => el.innerHTML = '0')
            this.input.placeholder = 'Сколько гостей'
            
            this.drawDecrementAndInput ()
        })} 

    }
}

let long = document.querySelectorAll('.long-dropdowns')
let short = document.querySelectorAll('.short-dropdowns')

long.forEach(el => new Dropdowns (el))
short.forEach(el => new Dropdowns (el))