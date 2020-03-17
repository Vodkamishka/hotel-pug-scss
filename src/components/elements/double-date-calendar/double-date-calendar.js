const jsParentClass = 'js-double-date-calendar';
const parentClassHide = 'double-date-calendar__calendar-wrapper_hide';

const props = {
  minDate: new Date(),
  offset: 9,
  range: true,
  multipleDatesSeparator: '-',
  navTitles: {
    days: 'MM yyyy',
  },
};

class DoubleDateCalendar {
  constructor(el) {
    this.$double = el;
    this.init();
  }

  init() {
    this.findDom();
    this.$calendar.datepicker({ ...props, onSelect: this.select.bind(this) });
    this.data = this.$calendar.data('datepicker');
    this.addEventListeners();
  }

  findDom() {
    this.$calendar = this.$double.find('.js-calendar');
    this.$tickFirst = this.$double.find(`.${jsParentClass}__button-tick_first`);
    this.$tickSecond = this.$double.find(`.${jsParentClass}__button-tick_second`);
    this.$container = this.$double.find(`.${jsParentClass}__calendar-wrapper`);
    this.$apply = this.$double.find(`.${jsParentClass}__button-apply`);
    this.$clear = this.$double.find(`.${jsParentClass}__button-clear`);
    this.$inputs = this.$double.find('.js-input__input');
  }

  addEventListeners() {
    this.$tickFirst.on('click', () => this.$container.toggleClass(parentClassHide));
    this.$tickSecond.on('click', () => this.$container.toggleClass(parentClassHide));
    this.$apply.on('click', () => this.$container.toggleClass(parentClassHide));
    this.$clear.on('click', () => this.data.clear());
  }

  select(stringDates) {
    const dates = stringDates.split('-');
    $(this.$inputs[0]).val(dates[0]);
    $(this.$inputs[1]).val(dates[1]);
  }
}

$(`.${jsParentClass}`).each((index, el) => new DoubleDateCalendar($(el)));
