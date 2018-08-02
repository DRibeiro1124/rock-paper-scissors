const playerOneUpdateNameButtonClickEvent = () => {
  console.log('updating player one name')
  const currentValue = document.querySelector('.p1-name-input').value
  console.log(currentValue) 
  document.querySelector('.player-one-name').textContent = currentValue
}

const updatePlayerTwoName = () => {
  console.log('updating player one name')
  const playerName = document.querySelector('.p2-name-input').value
  document.querySelector('.p2-name-input').textContent = playerName
}

const playerOneRockButtonSelected = () => {
  console.log('Player one rock button clicked')
  playerOneSelects = 'rock'
}
const playerOnePaperButtonSelected = () => {
  console.log('Player One paper button clicked')
  playerOneSelects = 'paper'
}
const playerOneScissorsButtonSelected = () => {
  console.log('Player One scissors button clicked')
  playerOneSelects = 'scissors'
}
const playerTwoRockButtonSelected = () => {
  console.log('Player Two rock button clicked')
  playerTwoSelects = 'rock'
}
const playerTwoPaperButtonSelected = () => {
  console.log('Player Two paper button clicked')
  playerTwoSelects = 'paper'
}
const playerTwoScissorsButtonSelected = () => {
  console.log('Player Two scissors button clicked')
  playerTwoSelects = 'scissors'
}

document.querySelector('.p1-change-name-button').addEventListener('click', playerOneUpdateNameButtonClickEvent)
document.querySelector('.p1-rock-button').addEventListener('click', playerOneRockButtonSelected) 
document.querySelector('.p1-paper-button').addEventListener('click', playerOnePaperButtonSelected)
document.querySelector('.p1-scissors-button').addEventListener('click', playerOneScissorsButtonSelected)
document.querySelector('.p2-rock-button').addEventListener('click', playerTwoRockButtonSelected)
document.querySelector('.p2-paper-button').addEventListener('click', playerTwoPaperButtonSelected)
document.querySelector('.p2-scissors-button').addEventListener('click', playerTwoScissorsButtonSelected)
