function showTime()
{
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am_pm = document.getElementById("format");
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";
    if(h>12){
        h-=12;
        var am = "PM";
    }
    if(h==0){
        h=12;
        var am = "AM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    am_pm.innerHTML = am;
}
setInterval(showTime,1000);
