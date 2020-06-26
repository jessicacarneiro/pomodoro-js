const addMinutesToDate = (date, minutes) => {
    return new Date(date.getTime() + minutes*60000);
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

export { addMinutesToDate, subtractTimeInMs, subtractTime, padIntTwo };