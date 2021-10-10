// Main Date and Time in Header
var currentTime = moment().format('MMMM Do, YYYY - hh:mm:ss a');
$('#currentDay')
    .text(currentTime);

$('.saveBtn')
    .html('<i class="far fa-save fa-lg"></i>')