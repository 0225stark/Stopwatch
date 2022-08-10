var hr=0;
var min=0;
var sec=0;
var ct=0;
var timer=false;

function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer=false;
    stopwatch();
}

function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    ct=0;
    document.getElementById("hr").innerHTML= "00";
    document.getElementById("min").innerHTML= "00"; 
    document.getElementById("sec").innerHTML= "00";
    document.getElementById("count").innerHTML="00";
}

function stopwatch(){
    if(timer==true){
        ct=ct+1;

        if(ct==100){
            sec=sec+1;
            ct=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        var hrString= hr;
        var minString= min;
        var secString = sec;
        var ctString = ct;

        if(hr< 10){
            hrString ="0"+hrString; 
        }
        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secString="0"+secString;
        }
        if(ct<10){
            ctString="0"+ctString;
        }

        document.getElementById("hr").innerHTML= hrString;
        document.getElementById("min").innerHTML= minString; 
        document.getElementById("sec").innerHTML= secString;
        document.getElementById("count").innerHTML=ctString;
        setTimeout("stopwatch()",10);
    }

}
