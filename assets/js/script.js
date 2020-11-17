window.onload = function() {
    var currentDate = moment();
    var currentDayEl = $("#currentDay");
    currentDayEl.innerHTML = currentDate.format('MMM DD, YYYY');
};