$(document).ready(function () {
    var description = $('.description');
    $('.saveBtn').on('click', function () {
        makeKeys()

    })
    function makeKeys() {
        var comment = $.trim($('#event-9').val());
        if (comment != '') {
            localStorage.setItem('event-1', comment)
        }
        var comment1 = $.trim($('#event-10').val());
        if (comment1 != '') {
            localStorage.setItem('event-2', comment1)
        }
        var comment2 = $.trim($('#event-11').val());
        if (comment2 != '') {
            localStorage.setItem('event-3', comment2)
        }
        var comment3 = $.trim($('#event-12').val());
        if (comment3 != '') {
            localStorage.setItem('event-4', comment3)
        }
        var comment4 = $.trim($('#event-13').val());
        if (comment4 != '') {
            localStorage.setItem('event-5', comment4)
        }
        var comment5 = $.trim($('#event-14').val());
        if (comment5 != '') {
            localStorage.setItem('event-6', comment5)
        }
        var comment6 = $.trim($('#event-15').val());
        if (comment6 != '') {
            localStorage.setItem('event-7', comment6)
        }
        var comment7 = $.trim($('#event-16').val());
        if (comment7 != '') {
            localStorage.setItem('event-8', comment7)
        }
        var comment8 = $.trim($('#event-17').val());
        if (comment8 != '') {
            localStorage.setItem('event-9', comment8)
        }
    }
    function print() {
        $('#event-9').val(localStorage.getItem('event-1'))
        $('#event-10').val(localStorage.getItem('event-2'))
        $('#event11').val(localStorage.getItem('event-3'))
        $('#event-12').val(localStorage.getItem('event-4'))
        $('#event-13').val(localStorage.getItem('event-5'))
        $('#event-14').val(localStorage.getItem('event-6'))
        $('#event-15').val(localStorage.getItem('event-7'))
        $('#event-16').val(localStorage.getItem('event-8'))
        $('#event-17').val(localStorage.getItem('event-9'))
    }
    function clearKeys() {
        localStorage.clear();
    }
    function hoursUpdater() {
        print();
        var currentHour = moment().hours();
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour > currentHour) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            }
        })
        if (currentHour <= 8 || currentHour >= 18) {
            clearKeys()
        }
    }

    hoursUpdater();
    var interval = setInterval(hoursUpdater, 15000);
});

