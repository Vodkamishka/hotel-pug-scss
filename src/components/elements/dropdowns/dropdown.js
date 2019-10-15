import './dropdown.scss'
import './execute-panel/execute-panel'



window.onload = function () { 
    
            function guests (result, input, made ='') {
            if (made){
                let res = 0
                result.forEach(el => res += +el.innerHTML)
                    let guest
                    let num = res
                    if (num > 20) {num %= 10}
                        if (num === 0 || num > 4 && num<= 20) {guest = ' гостей'}
                        else if (num === 1) {guest = ' гость'}
                        else {guest = ' гостя'}
                input.value = res + guest
            }}
            function beds (result, input) {
                let array = []
                let rooms = ['Спальни', 'Кровати']
                    function a (name, num) {
                        let bed
                        if (num > 20) {num %= 10}
                            if (num === 0 || num > 4 && num<= 20) {bed = (name === 'спальни') ? ' спален' : ' кроватей'}
                            else if (num === 1) {bed = (name === 'спальни') ?  ' спальня' : ' кровать'}
                            else {bed = (name === 'спальни') ?  ' спальни' : ' кровати'}
                        return bed    
                    }
                    let goods = [a('спальни', +result[0].innerHTML), a('кровати', +result[1].innerHTML)]  
                rooms.forEach((el, index) => {
                    array.push(result[index].innerHTML + ' ' + goods[index])
                })
                input.value = array.join(', ') + '...'
            }  

            let long = document.querySelectorAll('.long-dropdowns')
            let short = document.querySelectorAll('.short-dropdowns')

            function  func (long, place) {

            long.forEach(el => {
                let input = el.querySelector('input')
                let shortDropdown = el.querySelector('.short-dropdown')
                let increment = el.querySelectorAll('.execute-panel__circle-increment')
                let decrement = el.querySelectorAll('.execute-panel__circle-decrement')
                let result = el.querySelectorAll('.execute-panel__result')
                let clear = el.querySelector('.short-dropdown__clear')
                
                input.addEventListener("click", function() {
                    shortDropdown.classList.toggle("will-hide")
                })
                function check (made) {
                    result.forEach((el, index) => {
                    if (el.innerHTML === '0') {increment[index].style.opacity = 0}
                    else {increment[index].style.opacity = 1}
                    })
                    place(result, input, made)  
                }
                check ()
                increment.forEach(el => {
                    el.addEventListener('click', function () {
                        let result = this.nextElementSibling;
                        if (result.innerHTML>0) result.innerHTML = result.innerHTML - 1
                        check (true)
                    })
                })
                decrement.forEach(el => {
                    el.addEventListener('click', function() {
                        let result = this.previousElementSibling
                        result.innerHTML = +result.innerHTML + 1
                        check (true)
                    })
                })
                if (clear) {clear.addEventListener('click', function() {
                    result.forEach(el => el.innerHTML = '0')
                    input.placeholder = 'Сколько гостей'
                    check (true) 
                })} 
            })

            }
        
            func (long, guests)
            func (short, beds)

            let exp = document.querySelectorAll('.expandable-checkbox')
          
            exp.forEach(el => {
                let img = el.querySelector('.expandable-checkbox__image')
                let list = el.querySelector('.expandable-checkbox__list')
               
                img.addEventListener("click", function() {
                    this.classList.toggle('image-exp')
                    list.classList.toggle('hide')
                })
            
            })
            
        }