function imgSlider(anything) {
    document.querySelector('.sign').src = anything;

    /* 
    var sign = getSignName();
    getDescription(sign); 
    */
}

function getSignName() {
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

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function guessTime() {
    // 
    var x = document.forms["birthForm"]["birth-time"].value;
    console.log(x);
    event.preventDefault();

    // logic for finding out the sun sign
    var date = new Date(x);
    var sign;
    console.log(date.getDate());
    console.log(date.getMonth() + 1);
    if (date.getDate());
    // adding it to the interface
    document.querySelector('.sign').innerHTML = sign;
}

function handleForm(event) { event.preventDefault(); }