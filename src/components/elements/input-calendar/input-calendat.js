class DatePickerHere {
  constructor() {
    this.init();
  }

  init() {
    $('#start').datepicker({
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: ' - ',
      clearButton: true,
    });

    $('#new').datepicker({
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: ' - ',
      clearButton: true,
    });

    $('#start').datepicker({
      // eslint-disable-next-line func-names
      onSelect(fd, _d, _picker) {
        $('#start').val(fd.split('-')[0]);
        $('#end').val(fd.split('-')[1]);
      },
    });

    $('#end').click(() => {
      $('#start')
        .data('datepicker')
        .show();
    });
    $('#start').click(() => {
      $('#start')
        .data('datepicker')
        .show();
    });

    $('.datepicker--buttons').append(
      '<span class=\'datepicker-button\' data-action=\'apply\'>Применить</span>',
    );
    const apply = document.querySelector('[data-action="apply"]');
    apply.addEventListener('click', () => {
      $('.datepicker').css('left', '-10000px');
    });
  }
}

$(document).ready(() => {
  new DatePickerHere();
});
