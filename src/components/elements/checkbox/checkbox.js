import './checkbox.scss';

class Checkbox {
    constructor (el) {
        this.img = el.querySelector('.expandable-checkbox__image')
        this.list = el.querySelector('.expandable-checkbox__list')
        this.addClick()
    }
    addClick = () => {
        this.img.addEventListener("click", () => {
            this.img.classList.toggle('image-exp')
            this.list.classList.toggle('hide')
        })
    }
}

let exp = document.querySelectorAll('.expandable-checkbox')

exp.forEach(el => {
    new Checkbox (el)
})