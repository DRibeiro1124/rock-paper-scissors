const playerOneRockButtonEvent = () => {
  console.log('Player one rock button clicked')
  playerOneSelects = 'rock'
}
const playerOnePaperButtonEvent = () => {
  console.log('Player One paper button clicked')
  playerOneSelects = 'paper'
}
const playerOneScissorsButtonEvent = () => {
  console.log('Player One scissors button clicked')
  playerOneSelects = 'scissors'
}
const playerTwoRockButtonEvent = () => {
  console.log('Player Two rock button clicked')
  playerTwoSelects = 'rock'
}
const playerTwoPaperButtonEvent = () => {
  console.log('Player Two paper button clicked')
  playerTwoSelects = 'paper'
}
const playerTwoScissorsButtonEvent = () => {
  console.log('Player Two scissors button clicked')
  playerTwoSelects = 'scissors'
}

document.querySelector('.p1-rock-button').addEventListener('click', playerOneRockButtonEvent) 
document.querySelector('.p1-paper-button').addEventListener('click', playerOnePaperButtonEvent)
document.querySelector('.p1-scissors-button').addEventListener('click', playerOneScissorsButtonEvent)
document.querySelector('.p2-rock-button').addEventListener('click', playerTwoRockButtonEvent)
document.querySelector('.p2-paper-button').addEventListener('click', playerTwoPaperButtonEvent)
document.querySelector('.p2-scissors-button').addEventListener('click', playerTwoScissorsButtonEvent)
