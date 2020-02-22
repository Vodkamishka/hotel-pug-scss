class View {
  constructor(slider) {
    this.slider = slider;
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

export default View;
