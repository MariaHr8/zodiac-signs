function imgSlider(anything) {
    document.querySelector('.sign').src = anything;

    var sign = getSignName();

    getDescription(sign);
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