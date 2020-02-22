class DatePickerHere {
  constructor() {
    DatePickerHere.init();
  }

  static init() {
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
      onSelect(fd) {
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
    $('.datepicker-button[data-action="apply"]');

    $('.datepicker-button[data-action="apply"]').on('click', () => {
      $('.datepicker').css('left', '-625rem');
    });
  }
}

$(document).ready(() => new DatePickerHere());
