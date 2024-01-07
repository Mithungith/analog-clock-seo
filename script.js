setInterval(setClock,1000);

const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60;
    const minuteRatio =(secondRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currentDate.getHours())/12;
    setRatation(secondHand,secondRatio);
    setRatation(minuteHand,minuteRatio);
    setRatation(hourHand,hourRatio);
}

function setRatation(element,getRotation){
    element.style.setProperty('--rotation',getRotation*360);
}
setClock();