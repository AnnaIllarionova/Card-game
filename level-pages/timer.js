export let minutes = 0;
export let seconds = 0;

export function useTimer({ secondsElement, minutesElement }) {
    seconds++;
    seconds = seconds <= 9 ? "0" + seconds : seconds;
    secondsElement.innerHTML = seconds;
    if (seconds > 59) {
        minutes++;
        minutesElement.innerHTML = "0" + minutes;
        seconds = 0;
        secondsElement.innerHTML = "0" + seconds;
    }
    if (minutes > 9) {
        minutesElement.innerHTML = minutes;
    }
}
