# Tbrain Task Hunter — iPhone PWA starter

This is a mobile-first PWA shell, not yet connected to Tbrain or a push provider. It deliberately does not request/store Tbrain passwords, cookies, or tokens and does not pretend to claim tasks.

## Current state
- Mobile dashboard and Duration filter UI.
- PWA manifest and service worker push-event handler.
- Notification permission/test UI for the foreground.
- Safe default: no automatic task claim.

## What is still required for real task alerts
1. A verified, permitted source for Open reviews task data and a supported authentication method. The provided `pool` response had `data: []`, so it does not reveal task fields or prove how the request is authenticated.
2. A backend on HTTPS that polls the permitted source and stores new task IDs.
3. Web Push backend with VAPID keys and encrypted payloads; register each device's PushSubscription with the backend.
4. Deploy this directory to HTTPS, add the site to the iPhone Home Screen, then grant notification permission from the installed web app.
5. Verify the `Review` action and post-action status before adding any claim button.

## iPhone installation after deployment
Open the HTTPS site in Safari → Share → Add to Home Screen → turn on Open as Web App → Add. Open from the Home Screen icon, then allow notifications.

Do not commit secrets, session cookies, Authorization headers, or private Tbrain data to this repository.
