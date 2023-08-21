// Variables
var h1 = document.getElementById('h1');
var days = document.getElementById('day');
var months = document.getElementById('month');
var years = document.getElementById('year');

var userName = document.getElementById('userName');
var password = document.getElementById('password');

var loginBtn = document.getElementById('loginBtn');
var settingBtn = document.getElementById('settingBtn');

var clock = document.getElementById("clock");
var loginForm = document.getElementById("loginForm")
var settingForm = document.getElementById("settingForm")

var setSec = document.getElementById("setSec");
var setMin = document.getElementById("setMin");
var setHours = document.getElementById("setHours");
var setDays = document.getElementById("setDays");
var setMonths = document.getElementById("setMonths");
var setYears = document.getElementById("setYears");

var settings = document.getElementById("settings");

var spinner = document.getElementById("spinner");
var overlay = document.getElementById("overlay");
var admin = document.getElementById("admin");
var start = document.getElementById("start");
// ----------------------------------------------------------------

// Show settings
settings.addEventListener('click', function () {
    overlay.classList.toggle('displayBlock');
    admin.classList.toggle('displayBlock');
});


// Forms
// login form | First form
loginForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    if (userName.value == "admin" && password.value == "admin") {
        // alert("Success!");
        loginForm.style.display = "none";
        settingForm.style.display = "block";
    } else {
        alert("Error!");
    }
});

// Settings form | Second form
settingForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();
});
// ----------------------------------------------------------------

// Functions
function readNumber(message) {
    var number;

    number = prompt(message);
    return number;
}

// ----------------------------------------------------------------
function setNewTime() {
    if (setSec.value != "") {
        sec = setSec.value;
    }
    if (setMin.value != "") {
        min = setMin.value;
    }
    if (setHours.value != "") {
        hour = setHours.value;
    }
    if (setDays.value != "") {
        day = setDays.value;
    }
    if (setMonths.value != "") {
        month = setMonths.value;
    }
    if (setYears.value != "") {
        year = setYears.value;
    }
    return 0;
}

settingBtn.addEventListener("click", function () {
    setNewTime();
    settingForm.style.display = "none";
    loginForm.style.display = "block";
    h1.innerHTML = "<div #clockDisplay>" + hour + ":" + min + ":" + "<span>" + sec + "</span></div >";
});
// ----------------------------------------------------------------
var sec = 0, min = 0, hour = 0, day = 0, month = 0, year = 0;

start.addEventListener("click", function () {

    setInterval(() => {

        // Animations
        loginForm.classList.add("bigger");
        spinner.style.transform = `rotate(${(sec * 6) + 90}deg)`;


        // Conditions
        if (sec > 59) {
            min++;
            sec = 0;
        }
        if (min > 59) {
            hour++;
            min = 0;
        }

        if (hour > 23) {
            hour = 0;
            day++;
        }

        if (day > 30) {
            month++;
            day = 0;
        }

        if (month > 12) {
            year++;
            month = 0;
        }

        // Screen printer
        h1.innerHTML = hour + ":" + min + ":" + "<span>" + sec + "</span>";
        days.textContent = "Day: " + day;
        months.textContent = "Month: " + month;
        years.textContent = "Year: " + year;
        sec++;
    }, 1000);
});