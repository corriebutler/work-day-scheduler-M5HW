// Declaring variables

// Audit Tasks


// Load the tasks back in
var loadTaskDescriptions = function () {
    var loadTasks = JSON.parse(localStorage.getItem('savedTasks'));
    
    for (var i = 0; i < loadTasks.length; i++) {
        $('.hour').each(function() {
        if ($(this).text() === loadTasks[i].hour) {
            $(this).siblings('textarea').text(loadTasks[i].details);
            console.log('this works');
        }
    });  
    }
};

// Save task descriptions
$('.saveBtn').on('click', function savingTasks() {

    var tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
    var taskDescriptions = $(this).siblings('.description').val();
    var hourSlot = $(this).siblings('.hour').text().trim();

    var taskSave = {
        details: taskDescriptions,
        hour: hourSlot
    };

    tasks.push(taskSave);

    localStorage.setItem("savedTasks", JSON.stringify(tasks));
});

// Main Date and Time in Header
var currentTime = moment().format('MMMM Do, YYYY - hh:mm a');
$('#currentDay')
    .text(currentTime);
setInterval(function() {
    $('#currentDay').text(moment().format('MMMM Do, YYYY - hh:mm a'));
}, 45000);

// Load the save button icon
$('.saveBtn')
    .html('<i class="far fa-save fa-lg"></i>')

loadTaskDescriptions ();
