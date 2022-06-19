const hour = document.querySelector(".hours");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const amPm = document.querySelector(".ampm");
const date = document.querySelector(".date");


const getTime = ()=> {
  hour.innerHTML = new Date().getHours();
  minute.innerHTML = new Date().getMinutes();
  second.innerHTML = new Date().getSeconds();
  date.innerHTML =  new Date().toDateString();
   
   if (new Date().getHours() >12) { 
    amPm.innerHTML = "PM";
    
   } else {
    amPm.innerHTML ="AM"
   }
   hour.textContent.length = 1 && (hour.textContent = "0"+hour.textContent);
   minute.textContent.length = 1 && (minute.textContent = "0"+minute.textContent);
   second.textContent.length = 1 && (second.textContent = "0"+second.textContent);
};

setInterval(getTime,999);
