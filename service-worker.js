self.addEventListener('notificationclick', function (event) {
   let url = 'https://belgravia.qa/admin/core/reservation/';
   event.notification.close(); // Android needs explicit close.
   event.waitUntil(
      clients.matchAll({ type: 'window' }).then(windowClients => {
         // Check if there is already a window/tab open with the target URL
         for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            // If so, just focus it.
            if (client.url === url && 'focus' in client) {
               return client.focus();
            }
         }
         // If not, then open the target URL in a new window/tab.
         if (clients.openWindow) {
            return clients.openWindow(url);
         }
      })
   );
});


setInterval(async () => {
   console.log("from service worker")
   const start = 9 * 60; // starts at 9 am
   const end = 10 * 60; // ends at 10 am
   const date = new Date();
   const now = date.getHours() * 60 + date.getMinutes();

   if (start <= now && now <= end) {
      try {
         let res = await fetch("https://belgravia.qa/api/reservations/count/")
         res = await res.json()
         self.registration.showNotification("Today Reservations.", {
            body: `We have ${res.count} reservations today.`,
            icon: "./icon.png"
         })
      } catch (err) {
         console.log("couldn't get reservations count")
      }
   }
}, 60 * 60 * 1000)