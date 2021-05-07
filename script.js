document.getElementById('activation').addEventListener('click', Begin)

let inputa = 0
let rannum = 0

function Begin () {
  inputa = document.getElementById('input').value
  
  inputa = parseInt(inputa)
  rannum = parseInt(rannum)

  rannum = Math.floor(Math.random() * 6 ) + 1
  
  if (rannum == inputa) {
    document.getElementById('output').innerHTML = 'correct!'
  } else {
    document.getElementById('output').innerHTML = 'incorrect'
  }
}