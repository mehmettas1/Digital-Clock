const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const amPm = document.querySelector(".ampm");
const date = document.querySelector(".date");

const getTime  = () => {

hour.innerHTML = new Date().getHours() %12;
minute.innerHTML = new Date().getMinutes();
second.innerHTML = new Date().getSeconds();
date.innerHTML = new Date().toDateString();

if (new Date().getHours()>12) {
  amPm.textContent = "PM" ; 
} else {
  amPm.textContent = "AM";
}

hour.innerHTML.length == 1 &&(hour.innerHTML = "0"+hour.innerHTML);
minute.innerHTML.length == 1 &&(minute.innerHTML = "0"+minute.innerHTML);
second.innerHTML.length == 1 &&(second.innerHTML = "0"+second.innerHTML);


};


setInterval(getTime,999);