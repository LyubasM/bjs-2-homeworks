class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            time: time,
            canCall: true,
            callback: callback
        });
    }

    removeClock(timeToRemove) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== timeToRemove);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return date.toLocaleTimeString([], {
            hour: '2-digit', 
            minute: '2-digit'
        });
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                }
            })}, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}