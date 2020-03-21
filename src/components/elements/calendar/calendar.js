// eslint-disable-next-line import/extensions
import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.css';

$('.calendar').datepicker({
  minDate: new Date(),
  offset: 9,
  range: true,
  multipleDatesSeparator: '-',
  navTitles: {
    days: 'MM yyyy',
  },
});
