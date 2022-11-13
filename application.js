// application.js
navigator.serviceWorker.register('./service-worker.js');

// window.onload = async () => {
//    const reg = await navigator.serviceWorker.getRegistration();
//    Notification.requestPermission().then(permission => {
//       if (permission !== 'granted') {
//          alert('you need to allow push notifications');
//       } else {
//          const timestamp = new Date().getTime() + 5 * 1000; // now plus 5000ms
//          // const timestamp = new Date().getTime(); // now plus 5000ms
//          reg.showNotification(
//             'Demo Push Notification',
//             {
//                tag: timestamp, // a unique ID
//                body: 'Hello World', // content of the push notification
//                // showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
//                data: {
//                   url: window.location.href, // pass the current url to the notification
//                },
//                badge: './icon.png',
//                icon: './icon.png',
//                actions: [
//                   {
//                      action: 'open',
//                      title: 'Open app'
//                   },
//                   {
//                      action: 'close',
//                      title: 'Close notification',
//                   }
//                ]
//             }
//          );
//       }
//    });
// };

// navigator.serviceWorker.addEventListener('message', event => console.log(event.data));

function showNotification() {
   Notification.requestPermission((result) => {
      if (result === 'granted') {
         navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('Vibration Sample', {
               body: 'Buzz! Buzz!',
               icon: 'icon.png',
               vibrate: [200, 100, 200, 100, 200, 100, 200],
               tag: 'vibration-sample',
               actions: [
                  {
                     action: 'open',
                     title: 'Open app'
                  },
                  {
                     action: 'close',
                     title: 'Close notification',
                  }
               ]
            });
         });
      }
   });
}


showNotification()
