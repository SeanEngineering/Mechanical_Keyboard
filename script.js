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
  const line = document.querySelector('[data-input]');
  const prev = document.querySelector('[data-ouput]');
  const prev2 = document.querySelector('[data-output-2]')
  const prev3 = document.querySelector('[data-output-3]')
  if(!thock) return;
  thock.currentTime = 0;
  thock.play();
  key.classList.add('keyboard__key--down');
  key.addEventListener('keyup', () =>{
    key.classList.remove('keyboard__key--down')
  })
  switch (e.keyCode){
    case 27:
    case 9:
    case 220:
    case 20:
    case 16:
    case 38:
    case 46:
    case 17:
    case 18:
    case 91:
    case 93:
    case 18:
    case 37:
    case 40:
    case 39:
      return;
    case 13:
      prev3.innerText = prev2.innerText;
      prev2.innerText = prev.innerText;
      prev.innerText = line.innerText;
      line.innerText = '';
      break;
    case 32:
      line.innerText += '\u00a0';
      break;
    case 8:
      const textSeg = line.innerText;
      if (textSeg.length == 0) {return}
      line.innerText = textSeg.slice(0,textSeg.length-1);
      break;
    default:
      line.innerText += key.innerText;
      break;
  }
 
  
}

function backspace(e){

}


window.addEventListener('keydown', keyPress);
window.addEventListener('keyup',removeTransition)