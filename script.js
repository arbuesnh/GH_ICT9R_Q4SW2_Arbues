function convertTime() {
    const timeType = document.getElementById("time-type").value;
    const timeValue = document.getElementById("time-value").value;

    if (!timeValue) {
        document.querySelector('.time-value-label').innerHTML = " Please enter a value";
        return;
    } else {
        document.querySelector('.time-value-label').innerHTML = "";
    }

    let seconds, minutes, hours, days;

    switch (timeType) {
        case "seconds":
            seconds = timeValue;
            minutes = timeValue / 60;
            hours = timeValue / 3600;
            days = timeValue / 86400;
            break;
        case "minutes":
            seconds = timeValue * 60;
            minutes = timeValue;
            hours = timeValue / 60;
            days = timeValue / 1440;
            break;
        case "hours":
            seconds = timeValue * 3600;
            minutes = timeValue * 60;
            hours = timeValue;
            days = timeValue / 24;
            break;
        case "days":
            seconds = timeValue * 86400;
            minutes = timeValue * 1440;
            hours = timeValue * 24;
            days = timeValue;
            break;
        default:
            document.getElementById("resultSeconds").value = "";
            document.getElementById("resultMinutes").value = "";
            document.getElementById("resultHours").value = "";
            document.getElementById("resultDays").value = "";
            return;
    }

    document.getElementById("resultSeconds").value = seconds;
    document.getElementById("resultMinutes").value = minutes;
    document.getElementById("resultHours").value = hours;
    document.getElementById("resultDays").value = days;
}

function clearResults() {
    document.getElementById("resultSeconds").value = "";
    document.getElementById("resultMinutes").value = "";
    document.getElementById("resultHours").value = "";
    document.getElementById("resultDays").value = "";
    document.getElementById("time-value").value = "";
    }
    
    // add event listener to clear button
    const clearBtn = document.querySelector(".btn-danger");
    clearBtn.addEventListener("click", clearResults);