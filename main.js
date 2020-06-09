const container = document.querySelector('.container');
const text = document.querySelector('#text');

const CHANGE_TIME = 7500;

const totalTime = CHANGE_TIME;
const breatheTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);

breatheAnimation();

// Not declared as const because of hoisting
function breatheAnimation () {
  text.innerHTML = 'Breathe In';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerHTML = 'Hold!';

    setTimeout(() => {
      text.innerHTML = 'Breathe Out';
      container.className = 'container shrink';
    }, holdTime);

  }, breatheTime)

}
setInterval(breatheAnimation, totalTime);

if('serviceWorker' in navigator){
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./relaxovat/sw.js').then((reg) => {
      console.log('Service worker registered successfully! ', reg.scope);
    }).catch((err) => {
      console.log('Service worker registration failed! ', err);
    });
  });
}
