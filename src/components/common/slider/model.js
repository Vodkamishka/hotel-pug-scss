class Model {
  constructor(slider) {
    this.slider = slider;
    this.findDom();
  }

  static coor(element) {
    const block = element.getBoundingClientRect();
    return block.left;
  }

  findDom() {
    this.slider_inner = this.slider.querySelector('.js-slider__inner');
    this.between = this.slider.querySelector('.js-slider__between');
    this.button1 = this.slider.querySelector('.js-slider__btn_first');
    this.button2 = this.slider.querySelector('.js-slider__btn_second');
    this.size = this.slider.querySelector('.js-slider__size');
    this.size.innerHTML = `${5000}&#8381 - ${10000}&#8381`;
  }

  mousedown(event, btn1, btn2) {
    const button1 = btn1;
    const coorBtn1 = Model.coor(btn1);
    const coorBtn2 = Model.coor(btn2);
    const coorSlider = Model.coor(this.slider);
    const shift = event.pageX - coorBtn1;
    const moveBtn = (e) => {
      const btnWidth = btn1.offsetWidth;
      let left = e.pageX - shift - coorSlider;
      if (left > this.slider.offsetWidth - btnWidth / 2) {
        left = this.slider_inner.offsetWidth - btnWidth / 2;
      } else if (left < 0 - btnWidth / 2) {
        left = 0 - btnWidth / 2;
      }
      button1.style.marginLeft = `${left}px`;
      let right = coorBtn2 - coorSlider;
      if (right > left) {
        this.between.style.marginLeft = `${left + btnWidth / 2}px`;
      } else {
        this.between.style.marginLeft = `${right + btnWidth / 2}px`;
      }
      this.between.style.width = `${Math.abs(right - left)}px`;

      left = (left + btnWidth / 2) * 56.392;
      right = (right + btnWidth / 2) * 56.392;
      let temp;
      if (btn1 === this.button1) {
        if (left > right) {
          temp = left;
          left = right;
          right = temp;
        }
      } else if (left < right) {
        temp = left;
        left = right;
        right = temp;
      }
      if (btn1 === this.button1) {
        this.size.innerHTML = `${Math.round(left)}&#8381 - ${Math.round(right)}&#8381`;
      } else {
        this.size.innerHTML = `${Math.round(right)}&#8381 - ${Math.round(left)}&#8381`;
      }
    };
    document.addEventListener('mousemove', moveBtn);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveBtn);
    });
  }

  movedSlider(btn1, btn2) {
    btn1.addEventListener('mousedown', (event) => this.mousedown(event, btn1, btn2));
  }

  modelRunSlider() {
    this.movedSlider(this.button1, this.button2);
    this.movedSlider(this.button2, this.button1);
  }
}

export default Model;
