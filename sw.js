self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});
self.addEventListener('push',event=>{let data={title:'Tbrain Task Hunter',body:'Có cập nhật task mới.'};try{if(event.data)data={...data,...event.data.json()}}catch{}event.waitUntil(self.registration.showNotification(data.title,{body:data.body,icon:'./icon.svg',badge:'./icon.svg',data:{url:data.url||'./index.html'}}))});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(self.clients.openWindow(event.notification.data?.url||'./index.html'))});
