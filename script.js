document.getElementById('activation').addEventListener('click', Begin)

let result = "empty"
let inputa = 0
let rannum = 0

function Begin () {
  inputa = document.getElementById('input').value
  
  inputa = parseInt(inputa)
  rannum = parseInt(rannum)

  rannum = Math.floor(Math.random() * 6 ) + 1
  
  if (rannum == inputa) {
    document.getElementById('output').innerHTML = 'The number you guessed is correct!'
  } else {
    document.getElementById('output').innerHTML = 'The number you guessed is incorrect'
  }
}