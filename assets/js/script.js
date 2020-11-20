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
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-1 .description").val(localStorage.getItem("hour-1"))
    $("#hour-2 .description").val(localStorage.getItem("hour-2"))
    $("#hour-3 .description").val(localStorage.getItem("hour-3"))
    $("#hour-4 .description").val(localStorage.getItem("hour-4"))
    $("#hour-5 .description").val(localStorage.getItem("hour-5"))


    function loadTask() {
        divEl = document.getElementsByClassName("time-block").id.toString()
        console.log(localStorage.key, "RED")
        keyEl = localStorage.getItem(localStorage.key).toString()
        if (divEl === keyEl) {
            
            $(".time-block").value = keyEl
        }
    };
    loadTask();

});
// Attempting to push localstorage value to corresponding text block.

