function showTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // console.log(hours,minutes,seconds);

    // AM OR PM
    // 24 HOURS TO 12 HOURS CLOCK

    let session = "AM";
    if(hours==0){
        hours=12;
    }
    else if(hours== 12){
        session = "PM";
    }
    else if(hours > 12){
        session = "PM";
        hours=hours-12;
    }
    //console.log(hours,minutes,seconds,session);
    //ADD 0(ZERO) FOR SINGLE DIGIT


    hours= hours<10 ? "0"+hours : hours;
    minutes= minutes<10 ? "0"+minutes : minutes;
    seconds= seconds<10 ? "0"+seconds : seconds;

    //console.log(hours,minutes,seconds,session);

    let time = `${hours}:${minutes}:${seconds}:${session}`;
    document.querySelector("#clock").innerHTML=`
    <h3>Clock</h3>
    <p>${time}</p>
    `;
    setInterval(() => {
        showTime();
    },1000);
}
showTime();