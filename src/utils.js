const addMinutesToDate = (date, minutes, seconds=0) => {
    return new Date(date.getTime() + minutes*60000 + seconds*1000);
};

const subtractTimeInMs = (oldDate, newDate) => {
    return newDate.getTime() - oldDate.getTime();
}

const subtractTime = (oldDate, newDate) => {
    let diffInMiliSec = newDate.getTime() - oldDate.getTime();
    let min = diffInMiliSec/60000;
    let sec = (diffInMiliSec/1000)%(60);
    return [ parseInt(min), parseInt(sec)];
};

const padIntTwo = (field) => {
    return field.toString().padStart(2, '0');
}

module.exports = { addMinutesToDate, subtractTimeInMs, subtractTime, padIntTwo };