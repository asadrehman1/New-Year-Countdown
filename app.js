const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const newYearTime = new Date("January 1,2023 00:00:00").getTime();
updateCountDown();
function updateCountDown(){
    const presentTime = new Date().getTime();
    const diff = newYearTime - presentTime;
    
    const s = 1000;
    const m = s*60;
    const h = m*60;
    const d = h*24;
    
    const remDays = Math.floor(diff/d);
    const remHours = Math.floor((diff%d)/h);
    const remMinutes = Math.floor((diff%h)/m);
    const remSeconds = Math.floor((diff%m)/s);
    
    day.innerText = remDays;
    hour.innerText = remHours;
    minute.innerText = remMinutes;
    second.innerText = remSeconds;

    setTimeout(updateCountDown,1000);
}





