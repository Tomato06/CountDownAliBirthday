(function(){
    const second = 1000,
    minute = second*60,
    hour = minute*60,
    day = hour *24;

let birthday = " Nov 22,2022 00:00:00",
countdown = new
Date(birthday).getTime(),
x=setInterval(function(){
    let now = new Date().getTime(),
    distance = countdown - now;

    document.getElementById("days").innerText = Math.floor(distance/(day)),
    document.getElementById("hours").innerText = Math.floor((distance%(day))/(hour)),
    document.getElementById("minutes").innerText = Math.floor((distance%(hour))/(minute)),
    document.getElementById("seconds").innerText = Math.floor((distance%(minute))/(second))


    //when the date is reached
    if (distance<0){
        let headline = document.getElementById("headline"),

        countdown = document.getElementById("countdown")
        content = document.getElementById("content");
        headline.innerText ="It's your birthday"
        countdown.style.display = "none";
        content.style.display = "block";
        clearInterval(x);

    }

},0)

}());


/*var container = document.getElementById('container');
var bordersArray = ['50%' , '0'];
var blursArray =['0', '5px'];
var colorsArray = ['#FF6B6B' , '#FFE66D', '#4472CA'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 40;


function createElementRandom(){
    for(var i = 0; i<count ; i++)
    {
        var randomLeft = Math.floor(Math.random()*width);
        var randomTop = Math.floor(Math.random()*height);
        var color = Math.floor(Math.random()*3);
        var border = Math.floor(Math.random()*2);
        var blur = Math.floor(Math.random()*2);
        var widthElement = Math.floor(Math.random()*5 +5);

        var div = document.createElement("div");
        div.style.backgroundColor = colorsArray[color];
        div.style.position = 'absolute';
        div.style.width = widthElement +'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.borderRadius = bordersArray[border];
        div.style.filter = 'blur('+ blursArray[blur] + ')';
        div.style.animation = 'move 5s ease-in infinite';
        container.appendChild(div);


    }
}
createElementRandom();
*/