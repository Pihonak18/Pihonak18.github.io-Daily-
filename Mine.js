
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue = $(this).siblings(".input").val()
        // console.log(inputValue);
        var hour = $(this).siblings("#nine").attr("id")
        console.log(hour)
        localStorage.setItem(hour, inputValue)

    })
    function hours() {
    var myHour = moment().hours()
    console.log(myHour)
    $(".time").each(function() {
        // get the nine from 9 am compare that to myhours if less than myhours change color $(this).add or remove class
    var blockHour = parseInt($(this).attr("id"));
    if(blockHour < myHour) {
        $(this).addClass("past");
    }
    else if(blockHour === myHour) {
        $(this).removeClass("past");
    }
    })

    }
    hours();
    $("#task").val(localStorage.getItem("nine"))
    
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue1 = $(this).siblings(".input1").val()
        var hour1 = $(this).siblings("#ten").attr("id")
        console.log(hour1)
        localStorage.setItem(hour1, inputValue1)
    })
    $("#task1").val(localStorage.getItem("ten"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue2 = $(this).siblings(".input2").val()
        var hour2 = $(this).siblings("#eleven").attr("id")
        console.log(hour2)
        localStorage.setItem(hour2, inputValue2)
    })
    $("#task2").val(localStorage.getItem("eleven"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue3 = $(this).siblings(".input3").val()
        var hour3 = $(this).siblings("#twelve").attr("id")
        console.log(hour3)
        localStorage.setItem(hour3, inputValue3)
    })
    $("#task3").val(localStorage.getItem("twelve"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue4 = $(this).siblings(".input4").val()
        var hour4 = $(this).siblings("#one").attr("id")
        console.log(hour4)
        localStorage.setItem(hour4, inputValue4)
    })
    $("#task4").val(localStorage.getItem("one"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue5 = $(this).siblings(".input5").val()
        var hour5 = $(this).siblings("#two").attr("id")
        console.log(hour5)
        localStorage.setItem(hour5, inputValue5)
    })
    $("#task5").val(localStorage.getItem("two"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue6 = $(this).siblings(".input6").val()
        var hour6 = $(this).siblings("#three").attr("id")
        console.log(hour6)
        localStorage.setItem(hour6, inputValue6)
    })
    $("#task6").val(localStorage.getItem("three"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue7 = $(this).siblings(".input7").val()
        var hour7 = $(this).siblings("#four").attr("id")
        console.log(hour7)
        localStorage.setItem(hour7, inputValue7)
    })
    $("#task7").val(localStorage.getItem("four"))
})
$(document).ready(function() {
    $(".click").on("click", function() {
        var inputValue8 = $(this).siblings(".input8").val()
        var hour8 = $(this).siblings("#five").attr("id")
        console.log(hour8)
        localStorage.setItem(hour8, inputValue8)
    })
    $("#task8").val(localStorage.getItem("five"))
})