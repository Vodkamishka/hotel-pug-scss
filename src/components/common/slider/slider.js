import View from './view';
import Model from './model';


class Controller {
  constructor(model) {
    this.model = model;
    this.controllerRunSlider();
  }

  controllerRunSlider() {
    this.model.modelRunSlider();
  }
}
const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider) => {
  const view = new View(slider);
  const model = new Model(slider);
  return new Controller(model, view);
});
