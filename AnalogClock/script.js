const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function updateClock() {
      var date = new Date();
      //console.log(date);
      let hr = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      //console.log("Hour: "+hr+" Minute: "+min+" Seconds: "+sec);

      let hrPost = (hr*360/12)+(min*(360/60)/12);
      let minPost = (min*360/60)+(sec*(360/60)/60);
      let secPost = sec*360/60;

      HOURHAND.style.transform = "rotate(" + hrPost + "deg)";
      MINUTEHAND.style.transform = "rotate(" + minPost + "deg)";
      SECONDHAND.style.transform = "rotate(" + secPost + "deg)";
}


var interval = setInterval(updateClock, 1000);
