self.addEventListener('install', event => console.log('ServiceWorker installed'));


self.addEventListener('open', event => {
   event.waitUntil(self.clients.openWindow('/mahoud'));
   console.log("open");
   
});

self.addEventListener('notificationclick', event => {
   // event.waitUntil(self.clients.matchAll().then(clients => {
   //    if (clients.length) { // check if at least one tab is already open
   //       clients[0].focus();
   //    } else {
   //       self.clients.openWindow('/');
   //    }
   // }));
   console.log("hi");
});

// self.addEventListener('notificationclick', event => {
//    if (event.action === 'close') {
//       event.notification.close();
//    } else {
//       self.clients.openWindow('/');
//    }
// });