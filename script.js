$(document).ready(function () {

    function planner() {
        var d = new Date;
        var h = d.getHours();
        var dayPlans = JSON.parse(localStorage.getItem("description"));
        if (h === 9) {
            $('#hour-9').css("background-color", "red")
        }
        if (h > 9) {
            $('#hour-9').css("background-color", "grey")
        }
        if (h < 9) {
            $('#hour-9').css("background-color", "green")
        }
        if (h === 10) {
            $('#hour-10').css("background-color", "red")
        }
        if (h > 10) {
            $('#hour-10').css("background-color", "grey")
        }
        if (h < 10) {
            $('#hour-10').css("background-color", "green")
        }
        if (h === 11) {
            $('#hour-11').css("background-color", "red")
        }
        if (h > 11) {
            $('#hour-11').css("background-color", "gray")
        }
        if (h < 11) {
            $('#hour-11').css("background-color", "green")
        }
        if (h === 12) {
            $('#hour-12').css("background-color", "red")
        }
        if (h > 12) {
            $('#hour-12').css("background-color", "gray")
        }
        if (h < 12) {
            $('#hour-12').css("background-color", "green")
        }
        if (h === [13]) {
            $('#hour-13').css("background-color", "red")
        }
        if (h > 13) {
            $('#hour-13').css("background-color", "gray")
        }
        if (h < 13) {
            $('#hour-13').css("background-color", "green")
        }
        if (h === 14) {
            $('#hour-14').css("background-color", "red")
        }
        if (h > 14) {
            $('#hour-14').css("background-color", "gray")
        }
        if (h < 14) {
            $('#hour-14').css("background-color", "green")
        }
        if (h === 15) {
            $('#hour-15').css("background-color", "red")
        }
        if (h > 15) {
            $('#hour-15').css("background-color", "gray")
        }
        if (h < 15) {
            $('#hour-15').css("background-color", "green")
        }
        if (h === 16) {
            $('#hour-16').css("background-color", "red")
        }
        if (h > 16) {
            $('#hour-16').css("background-color", "gray")
        }
        if (h < 16) {
            $('#hour-16').css("background-color", "green")
        }
        if (h === 17) {
            $('#hour-17').css("background-color", "red")
        }
        if (h > 17) {
            $('#hour-17').css("background-color", "gray")
        }
        if (h < 17) {
            $('#hour-17').css("background-color", "green")
        }
        $('.btn').click(dayPlans);
        function dayPlans(e) {
            localStorage.setItem("description", JSON.stringify(dayPlans));
        };
    };
});
planner();
saveEvent();
