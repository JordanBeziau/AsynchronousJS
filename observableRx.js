const Observable = Rx.Observable;

const button = document.getElementById('button');

/*
const handler = e => {
  alert('Click !');
  button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

const clicks = Observable.fromEvent(button, 'click');

const subscription =
  clicks.forEach(
    function onNext(e) {
      alert('Click !');
      subscription.dispose();
    },
    function onError(error) {
      console.log('ERROR !');
    },
    function onCompleted() {
      console.log('done');
    }
  );

/*
try {
  [1, 2, 3].forEach(i => console.log(i));
  console.log('done');
} catch (e) {
  console.log('ERROR !');
}
*/
