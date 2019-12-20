class DatePickerHere {
  constructor() {
    this.init();
  }
  init = () => {
    $("#start").datepicker({
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: " - ",
      clearButton: true
    });

    $("#new").datepicker({
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: " - ",
      clearButton: true
    });

    $("#start").datepicker({
      onSelect: function(fd, d, picker) {
        $("#start").val(fd.split("-")[0]);
        $("#end").val(fd.split("-")[1]);
      }
    });

    $("#end").click(function(e) {
      $("#start")
        .data("datepicker")
        .show();
    });

    $(".datepicker--buttons").append(
      '<span class="datepicker--button" data-action="apply">Применить</span>'
    );
  };
}

$(document).ready(function() {
  new DatePickerHere();
});
