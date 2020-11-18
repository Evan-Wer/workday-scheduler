// On page load enable usage of save button
$().ready(function() {
    // save button 'on click'
    $(".saveBtn").click(function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save values in local storage
        localStorage.setItem(time, value);
    });

    // Function to set accurate time for hour blocks
    function setHour() {
        var currentHour = moment().hours();

        // looping over each time block
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
            // determine color coding of the time blocks
            if (currentHour === hourBlock) {
                $(this).addClass("present");
            } else if (currentHour > hourBlock) {
                $(this).addClass("past");
            } else if (curentHour < hourBlock) {
                $(this).addClass("future");
            }
        });
    };
    setHour();
});

// Attempting to push localstorage value to corresponding text block.
function loadTask() {
    divEl = document.getElementsByClassName("time-block").id.toString()
    keyEl = localStorage.getItem(localStorage.key(i)).toString()
    if (divEl === keyEl) {
        
        $(".time-block").value = keyEl
    };
};
