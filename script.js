var signs = [{
        "name": "Aries",
        "description": "The Aries zodiac sign is the 1st sign of the zodiac. The Aries people are willful, feisty, self-centered, courageous, bold, foolhardy, independent and straightforward."
    },
    {
        "name": "Taurus",
        "description": "The Taurus zodiac sign is the 2nd sign of the zodiac. The Taurus people are practical, creative, loyal, possessive, temperamental, sensually indulgent, down-to-earth, dependable, persistent and practical."
    },
    {
        "name": "Gemini",
        "description": "The Gemini zodiac sign is the 3rd sign of the zodiac. The Gemini people are curious, elusive, unpredictable, changeable, versatile, childlike, romantic, playful, friendly, talkative and have a keen intellect."
    },
    {
        "name": "Cancer",
        "description": "The Cancer zodiac sign is the 4th sign of the zodiac. The Cancer people are cautious, protective, nurturing, secretive, instinctive, needy, sensitive, funny, empathetic and deeply complex people."
    },
    {
        "name": "Leo",
        "description": "The Leo zodiac sign is the 5th sign of the zodiac. The Leos are distinctive, provocative, demanding, goal-oriented, flamboyant, self-made, warm, outgoing, sincere and loyal people."
    },
    {
        "name": "Virgo",
        "description": "The Virgo zodiac sign is the 6th sign of the zodiac. The Virgos are discriminating, obsessive, realistic, analytical, reliable, self-contained, knowledgeable, predictable, obsessive, discriminating, street-smart, detailed and modest people."
    },
    {
        "name": "Libra",
        "description": "The Libra zodiac sign is the 7th sign of the zodiac. The Libra is the only zodiac sign that has an inanimate object, the scales, as its symbol. Librans are harmonious, civilized, intellectual, sophisticated, seductive, elegant, creative, witty, balanced, sociable and people who maintain their status quo."
    },
    {
        "name": "Scorpio",
        "description": "The Scorpio zodiac sign is the 8th sign of the zodiac. The Scorpio people are intense, magnetic, erotic, challenging, secretive, powerful, broody, passionate, immovable and penetrating."
    },
    {
        "name": "Sagittarius",
        "description": "The Sagittarius zodiac sign is the 9th sign of the zodiac. The Sagittarius are adventurous, hilarious, extrovert, romantics, spirited, unstoppable, generous, happy and open-minded."
    },
    {
        "name": "Capricorn",
        "description": "The Capricorn zodiac sign is the 10th sign of the zodiac. The Capricorn people are organized, respectful, devoted, classy, materialistic, serious, staid, ambitious and practical."
    },
    {
        "name": "Aquarius",
        "description": "The Aquarius zodiac sign is the 11th sign of the zodiac. Aquarius people are original, idealistic, rebellious, independent, inventors, open minded and honest."
    },
    {
        "name": "Pisces",
        "description": "The Pisces zodiac sign is the 12th sign of the zodiac. Pisceans are dreamy, erratic, creative, romantic, compassionate, elusive, imaginative, sensitive and kind people."
    }
]


function imgSlider(anything) {
    document.querySelector('.sign').src = anything;

    //getting image name
    var sign = getSignName();

    document.querySelector('.title').innerHTML = "<span>" + sign + "</span>";
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
    if (sign == "Aries") {
        document.querySelector(".desc").innerHTML = signs[0].description;
    } else if (sign == "Taurus") {
        document.querySelector(".desc").innerHTML = signs[1].description;
    } else if (sign == "Gemini") {
        document.querySelector(".desc").innerHTML = signs[2].description;
    } else if (sign == "Cancer") {
        document.querySelector(".desc").innerHTML = signs[3].description;
    } else if (sign == "Leo") {
        document.querySelector(".desc").innerHTML = signs[4].description;
    } else if (sign == "Virgo") {
        document.querySelector(".desc").innerHTML = signs[5].description;
    } else if (sign == "Libra") {
        document.querySelector(".desc").innerHTML = signs[6].description;
    } else if (sign == "Scorpio") {
        document.querySelector(".desc").innerHTML = signs[7].description;
    } else if (sign == "Sagittarius") {
        document.querySelector(".desc").innerHTML = signs[8].description;
    } else if (sign == "Capricorn") {
        document.querySelector(".desc").innerHTML = signs[9].description;
    } else if (sign == "Aquarius") {
        document.querySelector(".desc").innerHTML = signs[10].description;
    } else if (sign == "Pisces") {
        document.querySelector(".desc").innerHTML = signs[11].description;
    } else {
        console.log("error");
    }
}