import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Anthony'
	}
});

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function() { console.log("Service Worker Registered"); });
  }

export default app;