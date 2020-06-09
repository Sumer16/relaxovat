if('serviceWorker' in Navigator){
  window.addEventListener('load', function () {
    navigator.register('https://github.com/Sumer16/relaxovat/sw.js').then((reg) => {
      console.log('Service worker registered successfully! ', reg.scope);
    }).catch((err) => {
      console.log('Service worker registration failed! ', err);
    });
  });
}
