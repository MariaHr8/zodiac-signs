function imgSlider(anything) {
    document.querySelector('.sign').src = anything;

    var sign = getSignName();
    document.querySelector('.signtext').innerHTML = sign;

    // getDescription(sign); 
}

function getSignName(src) {
    var filePN = event.target.src;
    var fileName = filePN.split("/");
    var final = fileName[4].split(".");
    var stringName = final[0].charAt(0).toUpperCase() + final[0].slice(1);
    return stringName;
}

function getDescription(sign) {
    let request = new XMLHttpRequest();

    request.open('GET', './data.json');
    request.responseType = 'json';

    request.onload = function() {
        const signs = request.response;
        for (var i = 0; i < signs.length; i++) {
            if (signs[i].name === sign) {
                document.querySelector(".desc").innerHTML = signs[i].description;
                document.querySelector('.title').innerHTML = "<span>" + sign + "</span>";
            }
        }
    }
    request.send();
}

function guessSign() {
    //async
    event.preventDefault();

    // getting data from the form
    var date = new Date(document.forms["birthForm"]["birth-time"].value);
    var day = date.getDate();
    var month = date.getMonth() + 1; //starts from 0

    // logic for finding out the sign
    var sign;

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        sign = "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        sign = "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        sign = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        sign = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        sign = "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        sign = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        sign = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        sign = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        sign = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        sign = "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        sign = "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        sign = "Capricorn";
    } else {
        console.log("no month");
    }

    // adding it to the interface
    document.querySelector('.signtext').innerHTML = sign;
    var path = "./images/" + sign.toLowerCase() + ".png";

    // change big image
    document.querySelector('.sign').src = path;

}