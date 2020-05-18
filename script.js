function city()
	

{

    var a,b;
    a = document.getElementById("1").value;
    b=document.getElementById("2");

    b.parentNode.removeChild(b);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + a +"&appid=34933565253d504f482d49ee2beb751c",function(data){


console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


var temp = Math.floor(data.main.temp);


var weather = data.weather[0].main;


$(".icon").attr("src", icon);

 

$(".weather").append(weather);

 
$(".temp").append(temp);

});
}

	
	
	
