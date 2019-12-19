class Dropdowns {
  constructor(el, width) {
    this.dropdown = el;
    this.input = el.querySelector("input");
    this.container = el.querySelector(`.dropdowns_${width}__container_execute`);
    this.increment = el.querySelectorAll(".execute-panel__increment");
    this.decrement = el.querySelectorAll(".execute-panel__decrement");
    this.result = el.querySelectorAll(".execute-panel__result");
    this.clear = el.querySelector(".dropdowns_long__clear");
    this.className = `dropdowns_${width}_hide`;
    this.init();
  }
  init = () => {
    this.showHideContainer();
    this.calculatedIncrement();
    this.calculatedDecrement();
    this.clearAll();
    this.drawDecrementAndInput();
  };
  setGuestsInInput = (result, input) => {
    let array = [];
    let peoples = ["взрослые", "младенцы"];
    function returnedTrueWord(name, num) {
      let word;
      if (num > 20) {
        num %= 10;
      }
      if (num === 0 || (num > 4 && num <= 20)) {
        word = name === "guests" ? " гостей" : " младенцев";
      } else if (num === 1) {
        word = name === "guests" ? " гость" : " младенец";
      } else {
        word = name === "guests" ? " гостя" : " младенца";
      }
      return word;
    }
    let humans = [
      returnedTrueWord("guests", +result[0].innerHTML + +result[1].innerHTML),
      returnedTrueWord("baby", +result[2].innerHTML)
    ];
    let humansNumber = [
      +result[0].innerHTML + +result[1].innerHTML,
      +result[2].innerHTML
    ];
    peoples.forEach((el, index) => {
      if (humansNumber[index] === 0) return;
      array.push(humansNumber[index] + " " + humans[index]);
    });
    this.input.value = array.join(", ");
  };
  setBedsInInput = (result, input) => {
    let array = [];
    let rooms = ["Спальни", "Кровати"];
    function returnTrueWord(name, num) {
      let bed;
      if (num > 20) {
        num %= 10;
      }
      if (num === 0 || (num > 4 && num <= 20)) {
        bed = name === "спальни" ? " спален" : " кроватей";
      } else if (num === 1) {
        bed = name === "спальни" ? " спальня" : " кровать";
      } else {
        bed = name === "спальни" ? " спальни" : " кровати";
      }
      return bed;
    }
    let goods = [
      returnTrueWord("спальни", +result[0].innerHTML),
      returnTrueWord("кровати", +result[1].innerHTML)
    ];
    rooms.forEach((el, index) => {
      array.push(result[index].innerHTML + " " + goods[index]);
    });
    this.input.value = array.join(", ") + "...";
  };
  showHideContainer = () => {
    this.input.addEventListener("click", () => {
      this.container.classList.toggle(this.className);
    });
  };
  drawDecrementAndInput = () => {
    this.result.forEach((el, index) => {
      if (el.innerHTML === "0") {
        this.decrement[index].style.opacity = 0;
      } else {
        this.decrement[index].style.opacity = 1;
      }
      if (this.dropdown.classList.contains("dropdowns_long")) {
        this.setGuestsInInput(this.result, this.input);
      } else {
        this.setBedsInInput(this.result, this.input);
      }
    });
  };
  calculatedIncrement = () => {
    this.increment.forEach(el => {
      el.addEventListener("click", () => {
        let result = el.previousElementSibling;
        result.innerHTML = +result.innerHTML + 1;

        this.drawDecrementAndInput();
      });
    });
  };
  calculatedDecrement = () => {
    this.decrement.forEach(el => {
      el.addEventListener("click", () => {
        let result = el.nextElementSibling;
        if (result.innerHTML > 0) result.innerHTML = result.innerHTML - 1;

        this.drawDecrementAndInput();
      });
    });
  };
  clearAll = () => {
    if (this.clear) {
      this.clear.addEventListener("click", () => {
        this.result.forEach(el => (el.innerHTML = "0"));
        this.input.placeholder = "Сколько гостей";

        this.drawDecrementAndInput();
      });
    }
  };
}

let long = document.querySelectorAll(".dropdowns_long");
let short = document.querySelectorAll(".dropdowns_short");

long.forEach(el => new Dropdowns(el, "long"));
short.forEach(el => new Dropdowns(el, "short"));

console.log(11111111111111111111);
