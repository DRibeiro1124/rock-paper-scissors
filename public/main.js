const playerOneUpdateNameButtonClickEvent = () => {
  console.log('updating player one name')
  const currentValue = document.querySelector('.p1-name-input').value
  console.log(currentValue) 
  document.querySelector('.player-one-name').textContent = currentValue
}

const playerTwoUpdateNameButtonClickEvent = () => {
  console.log('updating player two name')
  const currentValue = document.querySelector('.p2-name-input').value
  console.log(currentValue) 
  document.querySelector('.player-two-name').textContent = currentValue
}

const playerOneRockButtonSelected = () => {
  console.log('Player one rock button clicked')
  const currentValue = document.querySelector('.p1-rock-button').value
  console.log(currentValue)
  document.querySelector('.p1-choice').textContent = 'Rock!'
}
const playerOnePaperButtonSelected = () => {
  console.log('Player One paper button clicked')
  const currentValue = document.querySelector('.p1-paper-button').value
  console.log(currentValue)
  document.querySelector('.p1-choice').textContent = 'Paper!'
}
const playerOneScissorsButtonSelected = () => {
  console.log('Player One scissors button clicked')
  const currentValue = document.querySelector('.p1-scissors-button').value
  console.log(currentValue)
  document.querySelector('.p1-choice').textContent = 'Scissors!'
}
const playerTwoRockButtonSelected = () => {
  console.log('Player Two rock button clicked')
  const currentValue = document.querySelector('.p2-rock-button').value
  console.log(currentValue)
  document.querySelector('.p2-choice').textContent = 'Rock!'
}
const playerTwoPaperButtonSelected = () => {
  console.log('Player Two paper button clicked')
  const currentValue = document.querySelector('.p2-paper-button').value
  console.log(currentValue)
  document.querySelector('.p2-choice').textContent = 'Paper!'
}

const playerTwoScissorsButtonSelected = () => {
  console.log('Player Two scissors button clicked')
  const currentValue = document.querySelector('.p2-scissors-button').value
  console.log(currentValue)
  document.querySelector('.p2-choice').textContent = 'Scissors!'
}

document.querySelector('.p2-change-name-button').addEventListener('click', playerTwoUpdateNameButtonClickEvent)
document.querySelector('.p1-change-name-button').addEventListener('click', playerOneUpdateNameButtonClickEvent)
document.querySelector('.p1-rock-button').addEventListener('click', playerOneRockButtonSelected) 
document.querySelector('.p1-paper-button').addEventListener('click', playerOnePaperButtonSelected)
document.querySelector('.p1-scissors-button').addEventListener('click', playerOneScissorsButtonSelected)
document.querySelector('.p2-rock-button').addEventListener('click', playerTwoRockButtonSelected)
document.querySelector('.p2-paper-button').addEventListener('click', playerTwoPaperButtonSelected)
document.querySelector('.p2-scissors-button').addEventListener('click', playerTwoScissorsButtonSelected)
