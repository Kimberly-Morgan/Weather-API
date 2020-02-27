var weather;
 function setup() {
     createCanvas(200, 200);
     loadJson('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=21a5a7316c8e8c4061d04f45d5800583')
 }

 function gotData(data) {
     println(data);
     weather = data;
 }


 function draw() {
     background(0);
     if (weather) {
        
     }
 }
var apiKey = "";
var city = "Orlando"

$("button").click(function(){
    $.ajax({
        type: "GET",
        BaseURL: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`})
