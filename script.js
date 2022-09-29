/* Keyboard project

For this project we want to

- Assign all the keys the same value
- Add a query selector to identify which key is being pressed
- On keydown - change the visual transition
- On transition (key up) - change the visual transition
*/


function removeTransition(e) {
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  key.classList.remove('keyboard__key--down')
  
}

function keyPress(e){
  const thock = document.getElementById('thock')
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if(!thock) return;
  thock.currentTime = 0;
  thock.play();
  key.classList.add('keyboard__key--down');
  key.addEventListener('keyup', () =>{
    key.classList.remove('keyboard__key--down')
  })
}


window.addEventListener('keydown', keyPress);
window.addEventListener('keyup',removeTransition)