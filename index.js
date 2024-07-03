document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = new Date(now.getTime() + 3600000);
        const timeString = utcTime.toUTCString().slice(-12, -4);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[utcTime.getUTCDay()];

        document.getElementById('utc-time').textContent = timeString;
        document.getElementById('current-day').textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
