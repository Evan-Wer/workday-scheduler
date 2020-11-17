$().ready(function() {

// Object value in hours to determine the current our for tasks

// future, past and current block should be different colors

// Save button should save data to localstorage and then hold after refresh


    $(".saveBtn").click(function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
});