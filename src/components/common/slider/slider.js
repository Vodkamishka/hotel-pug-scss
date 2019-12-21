import "./slider.scss";

class View {
  constructor(el) {
    this.slider = el;
    this.create();
  }
  create = () => {
    let content = `<div class="slider__between"></div>
                            <div class="slider__btn1" style='margin-left: 4.6875rem'></div>
                            <div class="slider__btn2" style='margin-left: 10rem'></div>
                    `;
    this.slider.querySelector(".slider_inner").innerHTML = content;
  };
}
class Model {
  constructor(el) {
    this.slider = el;
    this.slider_inner = el.querySelector(".slider_inner");
    this.between = el.querySelector(".slider__between");
    this.button1 = el.querySelector(".slider__btn1");
    this.button2 = el.querySelector(".slider__btn2");
    this.size = el.querySelector(".slider__size");
    this.size.innerHTML = 5000 + "&#8381 - " + 10000 + "&#8381";
  }
  coor = element => {
    let block = element.getBoundingClientRect();
    return block.left;
  };
  movedSlider = (el1, el2) => {
    el1.addEventListener("mousedown", () => {
      let coorBtn2 = this.coor(el2);
      let coorSlider = this.coor(this.slider);

      const moveBtn = e => {
        let btnWidth = el1.offsetWidth;
        let bL = e.pageX - coorSlider;
        if (bL > this.slider.offsetWidth - btnWidth / 2) {
          bL = this.slider_inner.offsetWidth - btnWidth / 2;
        } else if (bL < 0 - btnWidth / 2) {
          bL = 0 - btnWidth / 2;
        }
        el1.style.marginLeft = bL + "px";

        let bR = coorBtn2 - coorSlider;

        if (bR > bL) {
          this.between.style.marginLeft = bL + btnWidth / 2 + "px";
        } else {
          this.between.style.marginLeft =
            el2.style.marginLeft + btnWidth / 2 + 2;
        }
        this.between.style.width = Math.abs(bR - bL) + "px";

        bL = (bL + btnWidth / 2) * 56.392;
        bR = (bR + btnWidth / 2) * 56.392;
        let n;
        if (el1 === this.button1) {
          if (bL > bR) {
            n = bL;
            bL = bR;
            bR = n;
          }
        } else {
          if (bL < bR) {
            n = bL;
            bL = bR;
            bR = n;
          }
        }
        if (el1 === this.button1) {
          this.size.innerHTML =
            parseInt(bL) + "&#8381 - " + parseInt(bR) + "&#8381";
        } else {
          this.size.innerHTML =
            parseInt(bR) + "&#8381 - " + parseInt(bL) + "&#8381";
        }
      };
      document.addEventListener("mousemove", moveBtn);
      document.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", moveBtn);
      });
    });
  };
  modelRunSlider = () => {
    this.movedSlider(this.button1, this.button2);
    this.movedSlider(this.button2, this.button1);
  };
}
class Controller {
  constructor(model) {
    this.model = model;
    this.controllerRunSlider();
  }
  controllerRunSlider = () => this.model.modelRunSlider();
}
let slider = document.querySelectorAll(".slider");
slider.forEach(el => {
  const view = new View(el);
  const model = new Model(el);
  new Controller(model);
});
