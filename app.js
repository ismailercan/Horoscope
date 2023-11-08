
/*
let day = Number(prompt("Your birthday..."));
let month = Number(prompt("Your birthmonth"));
*/
const newRow = "\r\n";


let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let calculateButton = document.getElementById("calculateButton");
let resultElement = document.getElementById("result");
let horoscope = "";

function calculateHoroscopeSign() {
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    

    if (day >= 21 && month == 3 || day <= 19 && month == 4) {
        horoscope = "Aries";
    } else if (day >= 20 && month == 4 || day <= 20 && month == 5) {
        horoscope = "Taurus";
    } else if (day >= 21 && month == 5 || day <= 20 && month == 6) {
        horoscope = "Gemini";
    } else if (day >= 21 && month == 6 || day <= 22 && month == 7) {
        horoscope = "Cancer";
    } else if (day >= 23 && month == 7 || day <= 22 && month == 8) {
        horoscope = "Leo";
    } else if (day >= 23 && month == 8 || day <= 22 && month == 9) {
        horoscope = "Virgo";
    } else if (day >= 23 && month == 9 || day <= 22 && month == 10) {
        horoscope = "Libra";
    } else if (day >= 23 && month == 10 || day <= 21 && month == 11) {
        horoscope = "Scorpio";
    } else if (day >= 22 && month == 11 || day <= 21 && month == 12) {
        horoscope = "Sagittarius";
    } else if (day >= 22 && month == 12 || day <= 19 && month == 1) {
        horoscope = "Capricorn";
    } else if (day >= 20 && month == 1 || day <= 18 && month == 2) {
        horoscope = "Aquarius";
    } else if (day >= 19 && month == 2 || day < 21 && month == 3) {
        horoscope = "Pisces";
    }

    resultElement.textContent = "Day : " + day + newRow+ "Month : " + month + newRow + "Horoscope : "+ horoscope;
}

calculateButton.addEventListener("click", calculateHoroscopeSign);
