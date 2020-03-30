class Header {
  constructor(el) {
    this.$header = el;
    this.init();
  }

  init() {
    this.findDom();
    this.addEventListeners();
  }

  findDom() {
    this.$burger = this.$header.find('.js-header__burger');
    this.$container = this.$header.find('.js-header__container');
    this.$a = this.$header.find('.js-header__a');
  }

  addEventListeners() {
    this.$burger.on('click', () => {
      this.$container.toggleClass('header__container_hide');
      this.$burger.toggleClass('change header__bottom');
      this.$a.toggleClass('header__bottom');
    });
  }
}

$('.js-header').each((index, el) => new Header($(el)));
