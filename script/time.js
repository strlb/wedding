
    timeend=new Date(2018,06,07,17);
    function time() {
        today = new Date();
        today = Math.floor((timeend-today)/1000);
        tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
        tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
        thour=today%24; today=Math.floor(today/24);
        // timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
        document.getElementById('time_days').innerHTML=today;
        document.getElementById('time_hours').innerHTML=thour;
        document.getElementById('time_minutes').innerHTML=tmin;
        document.getElementById('time_seconds').innerHTML=tsec;
        window.setTimeout("time()",1000);
    }