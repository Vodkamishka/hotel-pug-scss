import "../label/label";
import "./input-calendar.scss";
import "../../common/datepicker-here/datepicker-here";

class DatePickerHere {
  constructor() {
    this.init();
  }
  init = () => {
    $("#start").datepicker({
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: " - "
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
  };
}

$(document).ready(function() {
  new DatePickerHere();
});
