window.onload = function () {

    var celsiusBox = document.getElementById("Celsius");
    var fahrenheitBox = document.getElementById("Fahrenheit");
    var body = document.getElementById("body");
    body.style.backgroundImage = 'url("blossom3.jpg")';
    body.style.backgroundSize = "100% 250%"

    celsiusBox.oninput = function () {
        var celsiusTemp = celsiusBox.value;
        var fahrenheitTemp = celsiusTemp * 1.8 + 32;
        if(celsiusTemp == ""){
            body.style.backgroundImage = 'url("blossom3.jpg")';
        }else if(celsiusTemp < 10){
            body.style.backgroundImage = 'url("alpine.jpg")';
        }else if(celsiusTemp >= 10 && celsiusTemp <= 30){
            body.style.backgroundImage = 'url("agri.jpg")';
        }else if(celsiusTemp > 30 ){
            body.style.backgroundImage = 'url("dessert.jpg")';
        }

        if(celsiusTemp == ""){
            fahrenheitBox.value = '';
        }else{
            fahrenheitBox.value = fahrenheitTemp;
        }
    }

    fahrenheitBox.oninput = function () {
        var fahrenheitTemp = fahrenheitBox.value;
        var celsiusTemp = (fahrenheitTemp - 32) * 0.55;
        if(celsiusTemp == ""){
            body.style.backgroundImage = 'url("blossom3.jpg")';
        }else if(celsiusTemp < 10){
            body.style.backgroundImage = 'url("alpine.jpg")';
        }else if(celsiusTemp >= 10 && celsiusTemp <= 30){
            body.style.backgroundImage = 'url("agri.jpg")';
        }else if(celsiusTemp > 30 ){
            body.style.backgroundImage = 'url("dessert.jpg")';
        }


        if(fahrenheitTemp == ""){
            celsiusBox.value = '';
        }else {
            celsiusBox.value = celsiusTemp;
        }
    }
}