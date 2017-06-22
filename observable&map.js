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

const pointer = clicks.map((event) => {
  return 'x : ' + event.clientX + ', y : ' + event.clientY;
});

const subscription =
pointer.forEach(
  function onNext(pointer) {
    alert(pointer);
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

} catch (e) {
  console.log('ERROR !');
}
*/
