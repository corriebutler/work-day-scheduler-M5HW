// Load the save button icon
$('.saveBtn')
    .html('<i class="far fa-save fa-lg"></i>')

// Main Date and Time in Header
var currentTime = moment().format('MMMM Do, YYYY - hh:mm a');
$('#currentDay')
    .text(currentTime);
setInterval(function() {
    $('#currentDay').text(moment().format('MMMM Do, YYYY - hh:mm a'));
}, 45000);

// Audit Tasks
var auditTimes = function() {
    var rightNow = moment().format('H');
    var rightNowInt = parseInt(rightNow);

    $('.hour').each(function() {
    var timeSlot = parseInt($(this).attr('id'));
    console.log(timeSlot);
    console.log(rightNowInt);

    if (timeSlot === rightNowInt) {
        $('textarea').addClass('present');
    }
    else if (timeSlot > rightNowInt) {
        $('textarea').addClass('future');
    }
    else if (timeSlot < rightNowInt) {
        $('textarea').addClass('past');
    };
});
    
};

// Load the tasks back in
var loadTaskDescriptions = function () {
    var loadTasks = JSON.parse(localStorage.getItem('savedTasks'));
    
    for (var i = 0; i < loadTasks.length; i++) {
        $('.hour').each(function() {
        if ($(this).text() === loadTasks[i].hour) {
            $(this).siblings('textarea').text(loadTasks[i].details);
        }
    });  
    }
    auditTimes();
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

    $('#saved-task')
        .text('Your Task Was Saved!')
        .html('<div class="task-saved">Your task was saved in <p class="local-storage">local storage</p> <i class="fas fa-check"></i></div>')
});



loadTaskDescriptions ();
