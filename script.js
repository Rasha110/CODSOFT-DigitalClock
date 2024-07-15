function time(){
    var date=new Date();
    var hr=date.getHours();
    var min= date.getMinutes();
    var sec=date.getSeconds();
var AmPm=document.getElementById("AmPm");
AmPm.innerHTML = hr >= 12 ? "PM" : "AM";
if (hr >12) {
    hr = hr - 12;
}
else if (hr===0)
    {
    hr = 12;
}



document.getElementById("hours").innerHTML=hr;
document.getElementById("minutes").innerHTML=min;
document.getElementById("seconds").innerHTML=sec;
}
setInterval(time,10);
time();