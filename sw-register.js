if('serviceWorker' in navigator){
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('https://sumer16.github.io/relaxovat/sw.js').then((reg) => {
      console.log('Service worker registered successfully! ', reg.scope);
    }).catch((err) => {
      console.log('Service worker registration failed! ', err);
    });
  });
}