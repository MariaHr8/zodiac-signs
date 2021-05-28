function imgSlider(anything) {
    document.querySelector('.sign').src = anything;

    //getting image name
    var string = getSignName();

    document.querySelector('.title').innerHTML = "<span>" + string + "</span>";
}

function getSignName() {
    var str = event.target.src;
    var res = str.split("/");
    var final = res[4].split(".");
    var stringName = final[0].charAt(0).toUpperCase() + final[0].slice(1);
    return stringName;
}