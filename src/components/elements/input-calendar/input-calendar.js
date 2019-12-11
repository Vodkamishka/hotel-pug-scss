import '../label/label'
import './input-calendar.scss'
import '../../common/calendar-not-expand/calendar-not-expand'

$( document ).ready(function() {

    $("#start").datepicker({
        multipleDates: 2,
        range: true,
        multipleDatesSeparator: ' - ',
    });

    $("#start").datepicker({ 
        onSelect: function (fd, d, picker) { 
            $("#start").val(fd.split("-")[0]);
            $("#end").val(fd.split("-")[1]);
    }});

    $("#end").click(function(e) {
        $("#start").data("datepicker").show();
    });

})