$(document).ready(function () {
    // code below this
    var description = $('.description');

    // when the button gets clicked
    $('.saveBtn').on('click', function () {
        // want it to get the data in the input and save it to a new key
        makeKeys()

    })

    // function for creating keys with every click
    function makeKeys() {
        var comment = $.trim($('#plan-9').val());
        if (comment != '') {
            localStorage.setItem('plan-1', comment)
        }
        var comment1 = $.trim($('#plan-10').val());
        if (comment1 != '') {
            localStorage.setItem('plan-2', comment1)
        }
        var comment2 = $.trim($('#plan-11').val());
        if (comment2 != '') {
            localStorage.setItem('plan-3', comment2)
        }
        var comment3 = $.trim($('#plan-12').val());
        if (comment3 != '') {
            localStorage.setItem('plan-4', comment3)
        }
        var comment4 = $.trim($('#plan-13').val());
        if (comment4 != '') {
            localStorage.setItem('plan-5', comment4)
        }
        var comment5 = $.trim($('#plan-14').val());
        if (comment5 != '') {
            localStorage.setItem('plan-6', comment5)
        }
        var comment6 = $.trim($('#plan-15').val());
        if (comment6 != '') {
            localStorage.setItem('plan-7', comment6)
        }
        var comment7 = $.trim($('#plan-16').val());
        if (comment7 != '') {
            localStorage.setItem('plan-8', comment7)
        }
        var comment8 = $.trim($('#plan-17').val());
        if (comment8 != '') {
            localStorage.setItem('plan-9', comment8)
        }
    }
    // need a function for printing after reload page
    function print() {
        $('#plan-9').val(localStorage.getItem('plan-1'))
        $('#plan-10').val(localStorage.getItem('plan-2'))
        $('#plan-11').val(localStorage.getItem('plan-3'))
        $('#plan-12').val(localStorage.getItem('plan-4'))
        $('#plan-13').val(localStorage.getItem('plan-5'))
        $('#plan-14').val(localStorage.getItem('plan-6'))
        $('#plan-15').val(localStorage.getItem('plan-7'))
        $('#plan-16').val(localStorage.getItem('plan-8'))
        $('#plan-17').val(localStorage.getItem('plan-9'))
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

