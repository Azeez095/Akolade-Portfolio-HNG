document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[now.getUTCDay()];

        document.getElementById('utc-time').textContent = utcTime;
        document.getElementById('current-day').textContent = currentDay;
        }

    updateTime();
    setInterval(updateTime, 1000);
});