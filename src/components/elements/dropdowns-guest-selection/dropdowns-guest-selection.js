class Dropdowns {
  constructor(el, width) {
    this.dropdown = el;
    this.input = el.querySelector('input');
    this.container = el.querySelector(`.dropdowns-${width}-selection__container-execute`);
    this.increment = el.querySelectorAll('.execute-panel__increment');
    this.decrement = el.querySelectorAll('.execute-panel__decrement');
    this.result = el.querySelectorAll('.execute-panel__result');
    this.clear = el.querySelector('.dropdowns-guest-selection__clear');
    this.apply = el.querySelector('.dropdowns-guest-selection__apply');
    this.className = `dropdowns-${width}-selection_hide`;
    this.init();
  }

  init() {
    this.showHideContainer();
    this.calculatedIncrement();
    this.calculatedDecrement();
    this.clearAll();
    this.applyed();
    this.drawDecrementAndInput();
  }

  setGuestsInInput(result) {
    const array = [];
    const peoples = ['взрослые', 'младенцы'];
    function returnedTrueWord(name, humansNumber) {
      let word;
      let num = humansNumber;
      if (num > 20) {
        num %= 10;
      }
      if (num === 0 || (num > 4 && num <= 20)) {
        word = name === 'guests' ? ' гостей' : ' младенцев';
      } else if (num === 1) {
        word = name === 'guests' ? ' гость' : ' младенец';
      } else {
        word = name === 'guests' ? ' гостя' : ' младенца';
      }
      return word;
    }
    const humans = [
      returnedTrueWord('guests', +result[0].innerHTML + +result[1].innerHTML),
      returnedTrueWord('baby', +result[2].innerHTML),
    ];
    const humansNumber = [
      +result[0].innerHTML + +result[1].innerHTML,
      +result[2].innerHTML,
    ];
    peoples.forEach((_el, index) => {
      if (humansNumber[index] === 0) return;
      array.push(`${humansNumber[index]} ${humans[index]}`);
    });
    this.input.value = array.join(', ');
  }

  setBedsInInput(result) {
    const array = [];
    const rooms = ['Спальни', 'Кровати'];
    function returnTrueWord(name, bedNumbers) {
      let bed;
      let num = bedNumbers;
      if (num > 20) {
        num %= 10;
      }
      if (num === 0 || (num > 4 && num <= 20)) {
        bed = name === 'спальни' ? ' спален' : ' кроватей';
      } else if (num === 1) {
        bed = name === 'спальни' ? ' спальня' : ' кровать';
      } else {
        bed = name === 'спальни' ? ' спальни' : ' кровати';
      }
      return bed;
    }
    const goods = [
      returnTrueWord('спальни', +result[0].innerHTML),
      returnTrueWord('кровати', +result[1].innerHTML),
    ];
    rooms.forEach((el, index) => {
      array.push(`${result[index].innerHTML} ${goods[index]}`);
    });
    this.input.value = `${array.join(', ')}...`;
  }

  showHideContainer() {
    this.input.addEventListener('click', () => {
      this.container.classList.toggle(this.className);
    });
  }

  drawDecrementAndInput() {
    this.result.forEach((el, index) => {
      if (el.innerHTML === '0') {
        this.decrement[index].style.opacity = 0;
      } else {
        this.decrement[index].style.opacity = 1;
      }
      if (this.dropdown.classList.contains('dropdowns-guest-selection')) {
        this.setGuestsInInput(this.result);
      } else {
        this.setBedsInInput(this.result);
      }
    });
  }

  calculatedIncrement() {
    this.increment.forEach((el) => {
      el.addEventListener('click', () => {
        const result = el.previousElementSibling;
        result.innerHTML = +result.innerHTML + 1;

        this.drawDecrementAndInput();
      });
    });
  }

  calculatedDecrement() {
    this.decrement.forEach((el) => {
      el.addEventListener('click', () => {
        const result = el.nextElementSibling;
        if (result.innerHTML > 0) {
          result.innerHTML -= 1;
        }
        this.drawDecrementAndInput();
      });
    });
  }

  clearAll() {
    if (this.clear) {
      this.clear.addEventListener('click', () => {
        this.result.forEach((el) => {
          const res = el;
          res.innerHTML = '0';
        });
        this.input.placeholder = 'Сколько гостей';
        this.drawDecrementAndInput();
      });
    }
  }

  applyed() {
    if (this.apply !== null) {
      this.apply.addEventListener('click', () => {
        this.container.classList.toggle(this.className);
      });
    }
  }
}

const long = document.querySelectorAll('.dropdowns-guest-selection');
const short = document.querySelectorAll('.dropdowns-room-selection');

long.forEach((el) => new Dropdowns(el, 'guest'));
short.forEach((el) => new Dropdowns(el, 'room'));
