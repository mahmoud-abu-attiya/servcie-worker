// application.js
// navigator.serviceWorker.register('./service-worker.js');

const registerSw = async () => {
    if ('serviceWorker' in navigator) {
        Notification.requestPermission(async (result) => {
            if (result === 'granted') {
                await navigator.serviceWorker.register('service-worker.js');
            }
        })
    };
}


registerSw();
