import './slider.scss';

class View {
  constructor(el) {
    this.slider = el;
    this.create();
  }

  create() {
    const content = `<div class="slider__between js-slider__between"></div>
                            <div class="slider__btn_first js-slider__btn_first" style='margin-left: 4.6875rem'></div>
                            <div class="slider__btn_second js-slider__btn_second" style='margin-left: 10rem'></div>
                    `;
    this.slider.querySelector('.js-slider__inner').innerHTML = content;
  }
}
class Model {
  constructor(el) {
    this.slider = el;
    this.slider_inner = el.querySelector('.js-slider__inner');
    this.between = el.querySelector('.js-slider__between');
    this.button1 = el.querySelector('.js-slider__btn_first');
    this.button2 = el.querySelector('.js-slider__btn_second');
    this.size = el.querySelector('.js-slider__size');
    this.size.innerHTML = `${5000}&#8381 - ${10000}&#8381`;
  }

  coor(element) {
    const block = element.getBoundingClientRect();
    return block.left;
  }

  movedSlider(el1, el2) {
    el1.addEventListener('mousedown', () => {
      const coorBtn2 = this.coor(el2);
      const coorSlider = this.coor(this.slider);

      const moveBtn = (e) => {
        const btnWidth = el1.offsetWidth;
        let bL = e.pageX - coorSlider;
        if (bL > this.slider.offsetWidth - btnWidth / 2) {
          bL = this.slider_inner.offsetWidth - btnWidth / 2;
        } else if (bL < 0 - btnWidth / 2) {
          bL = 0 - btnWidth / 2;
        }
        // eslint-disable-next-line no-param-reassign
        el1.style.marginLeft = `${bL}px`;

        let bR = coorBtn2 - coorSlider;

        if (bR > bL) {
          this.between.style.marginLeft = `${bL + btnWidth / 2}px`;
        } else {
          this.between.style.marginLeft = el2.style.marginLeft + btnWidth / 2 + 2;
        }
        this.between.style.width = `${Math.abs(bR - bL)}px`;

        bL = (bL + btnWidth / 2) * 56.392;
        bR = (bR + btnWidth / 2) * 56.392;
        let n;
        if (el1 === this.button1) {
          if (bL > bR) {
            n = bL;
            bL = bR;
            bR = n;
          }
        } else if (bL < bR) {
          n = bL;
          bL = bR;
          bR = n;
        }
        if (el1 === this.button1) {
          // eslint-disable-next-line radix
          this.size.innerHTML = `${parseInt(bL)}&#8381 - ${parseInt(bR)}&#8381`;
        } else {
          // eslint-disable-next-line radix
          this.size.innerHTML = `${parseInt(bR)}&#8381 - ${parseInt(bL)}&#8381`;
        }
      };
      document.addEventListener('mousemove', moveBtn);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveBtn);
      });
    });
  }

  modelRunSlider() {
    this.movedSlider(this.button1, this.button2);
    this.movedSlider(this.button2, this.button1);
  }
}
class Controller {
  constructor(model) {
    this.model = model;
    this.controllerRunSlider();
  }

  controllerRunSlider() {
    this.model.modelRunSlider();
  }
}
const slider = document.querySelectorAll('.slider');
slider.forEach((el) => {
  const view = new View(el);
  const model = new Model(el);
  new Controller(model);
});
