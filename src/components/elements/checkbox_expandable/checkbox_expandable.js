import "./checkbox_expandable.scss";
import "../checkbox-list/checkbox-list.js";

class Checkbox {
  constructor(el) {
    this.img = el.querySelector(".checkbox_expandable__image");
    this.list = el.querySelector(".checkbox_expandable__list");
    this.addClick();
  }
  addClick = () => {
    this.img.addEventListener("click", () => {
      this.img.classList.toggle("checkbox_expandable__image_expand");
      this.list.classList.toggle("checkbox_expandable_hide");
    });
  };
}

let exp = document.querySelectorAll(".checkbox_expandable");

exp.forEach(el => {
  new Checkbox(el);
});
