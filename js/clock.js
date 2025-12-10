const time = document.getElementById('time');
const date = document.getElementById('date');
const timeZone = document.getElementById('time-zone')
const timeMessage = document.getElementById('message')


function formatting(n) {
    if (n < 10) {
        return "0" + n
    } else {
        return "" + n
    };
}

function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${formatting(hours)}:${formatting(minutes)}:${formatting(seconds)}`;
    time.textContent = formattedTime;

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedDate = `${formatting(day)}/${formatting(month)}/${formatting(year)}`
    date.textContent = formattedDate;

    const offsetMinutes = -now.getTimezoneOffset();
    const offsetHours = offsetMinutes / 60;
    timeZone.textContent = `UTC${offsetHours >= 0 ? "+" : ""}${offsetHours}`

    sentences(hours, minutes);
}

function sentences(hours, minutes) {
    if (!timeMessage) return;
    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes >= 1 && totalMinutes <= 420) {
        timeMessage.textContent = `Es hora de descansar. Apaga y sigue mañana.`
    } else if (totalMinutes >= 421 && totalMinutes <= 720) {
        timeMessage.textContent = `Buenos días, desayuna fuerte y a darle al código.`
    } else if (totalMinutes >= 721 && totalMinutes <= 840) {
        timeMessage.textContent = `Echa un rato más pero no olvides comer.`
    } else if (totalMinutes >= 841 && totalMinutes <= 960) {
        timeMessage.textContent = `Espero que hayas comido.`
    } else if (totalMinutes >= 961 && totalMinutes <= 1080) {
        timeMessage.textContent = `Buenas tardes, el último empujón.`
    } else if (totalMinutes >= 1081 && totalMinutes <= 1320) {
        timeMessage.textContent = `Esto ya son horas extras, ... piensa en parar pronto.`
    } else {
        timeMessage.textContent = `Buenas noches, es hora de pensar en parar y descansar.`
    }
}

updateClock()
setInterval(updateClock, 1000);