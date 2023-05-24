setTimeout(function() {
    document.getElementById("anime").style.display = "none";
}, 3500);

setTimeout(function() {
    document.getElementById("y_axis_knife").style.top = "0%";
    document.getElementById("y_axis_knife").style.left = "32.25%";
}, 7450);

var data = new Date();

var currentDay = data.getDay();

currentDay -= 2;

var currentYear = data.getFullYear();

document.getElementById("date").innerHTML = currentYear;


function dayOfWeek() {

    if (currentDay == -1) {
        currentDay = 6;
    } else if (currentDay == -2) {
        currentDay = 5;
    }

    for (var i = 1; i < 7; i++) {

        if (currentDay == 7) {
            currentDay = 0;
            document.getElementById("day" + i).src = "day" + currentDay + ".png";

        } else {

            document.getElementById("day" + i).src = "day" + currentDay + ".png";

        }
        currentDay++;
    }
}

function numbersOfDays() {

    let date2 = new Date();

    let mil = date2.getTime();

    mil += 86400000 * 3;

    let date3 = new Date(mil);

    var day = date3.getDate();

    let month = date2.getMonth();
    
    console.log(month);

    for (var i = 6; i > 0; i--) {
        if (day < 10) {
            day = "0" + day;
        } else {
            day = "" + day;
        }
        let tens = day.slice(0, 1);
        document.getElementById("ten" + i).src = tens + ".png";
        let unit = day.slice(1, 2);
        document.getElementById("unit" + i).src = unit + ".png";
        day = Number(day);
        day--;
        if(day == 0){
            switch(month){
                case 0:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 1:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 2:
                    if(day == 0 ){
                        day = 28
                    }
                break;
                case 3:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 4:
                    if(day == 0 ){
                        day = 30
                    }
                break;
                case 5:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 6:
                    if(day == 0 ){
                        day = 30
                    }
                break;
                case 7:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 8:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 9:
                    if(day == 0 ){
                        day = 30
                    }
                break;
                case 10:
                    if(day == 0 ){
                        day = 31
                    }
                break;
                case 11:
                    if(day == 0 ){
                        day = 30
                    }
                break;
            }
        }
    }
}



/*

function numbersOfDays() {
    let date2 = new Date();

    let mil = date2.getTime();

    let mil2 = data.getTime();

    mil -= 86400000 * 2;

    let date3 = new Date(mil);

    var day = date3.getDate();

    let mil2Help = -2;


    for (var i = 1; i < 7; i++) {
        let date4 = new Date(mil2);
        console.log(date4);
        console.log(mil2);
        console.log(day)
        if (day < 10) {
            day = "0" + day;
        } else {
            day = "" + day;
        }
        let tens = day.slice(0, 1);
        document.getElementById("ten" + i).src = tens + ".png";
        let unit = day.slice(1, 2);
        document.getElementById("unit" + i).src = unit + ".png";
        day = Number(day);
        day++;
    }
}
*/

document.getElementsByTagName("textarea").innerHTML = "Przykładowy tekst ishbdbzxucvguyhavcuschjvszducvs";

numbersOfDays();
dayOfWeek();