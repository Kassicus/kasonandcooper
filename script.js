CountDownTimer('10/04/2024 2:0 PM');

function CountDownTimer(dt)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
}

function loadhis() {
    document.getElementById("toggle-break-green").src = "assets/graphics/nfl_break_black.png"
    document.getElementById("toggle-break-top").src="assets/graphics/nfl_break.png"
    document.getElementById("toggle-break-bottom").src="assets/graphics/nfl_break.png"
    document.getElementById("toggle-leader").src = "assets/graphics/leaders_black.png"
}

function loadhers() {
    document.getElementById("toggle-break-green").src = "assets/graphics/breakline_green.png"
    document.getElementById("toggle-break-top").src="assets/graphics/breakline.png"
    document.getElementById("toggle-break-bottom").src="assets/graphics/breakline.png"
    document.getElementById("toggle-leader").src = "assets/graphics/leaders.png"
}