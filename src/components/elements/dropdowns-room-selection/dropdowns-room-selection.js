import Dropdowns from '../dropdowns-guest-selection/dropdowns-guest-selection';

const short = document.querySelectorAll('.dropdowns-room-selection');


class NewDropdowns extends Dropdowns {
  increased(el) {
    super.increased(el);
    this.drawResultInput();
  }

  reduced(el) {
    super.reduced(el);
    this.drawResultInput();
  }
}

short.forEach((el) => new NewDropdowns(el, 'room'));
