// Main Date and Time in Header
var currentTime = moment().format('MMMM Do, YYYY - hh:mm a');
$('#currentDay')
    .text(currentTime);
setInterval(function() {
    $('#currentDay').text(moment().format('MMMM Do, YYYY - hh:mm a'));
}, 45000);


$('.saveBtn')
    .html('<i class="far fa-save fa-lg"></i>')