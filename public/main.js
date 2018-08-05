let playerOneName = ''
let playerTwoName = ''

const playerOneUpdateNameButtonClickEvent = () => {
  console.log('updated player one name')
  playerOneName = document.querySelector('.p1-name-input').value
  document.querySelector('.player-one-name').textContent = playerOneName
}

const playerTwoUpdateNameButtonClickEvent = () => {
  console.log('updated player two name')
  playerTwoName = document.querySelector('.p2-name-input').value
  document.querySelector('.player-two-name').textContent = playerTwoName
}
const playerOneRockButtonSelected = () => {
  console.log('Player one rock button clicked')
  document.querySelector('.p1choice').textContent = 'Rock!'
}

const playerOnePaperButtonSelected = () => {
  console.log('Player One paper button clicked')
  document.querySelector('.p1choice').textContent = 'Paper!'
}

const playerOneScissorsButtonSelected = () => {
  console.log('Player One scissors button clicked')
  document.querySelector('.p1choice').textContent = 'Scissors!'
}

const playerTwoRockButtonSelected = () => {
  console.log('Player Two rock button clicked')
  document.querySelector('.p2choice').textContent = 'Rock!'
}

const playerTwoPaperButtonSelected = () => {
  console.log('Player Two paper button clicked')
  document.querySelector('.p2choice').textContent = 'Paper!'
}

const playerTwoScissorsButtonSelected = () => {
  console.log('Player Two scissors button clicked')
  document.querySelector('.p2choice').textContent = 'Scissors!'
}

const declareWinnerButtonEvent = () => {
  console.log('Winner button was clicked')

  // Assigned playerOne & playerTwo selections to variables
  let playerOneSelection = document.querySelector('.p1choice').innerHTML
  let playerTwoSelection = document.querySelector('.p2choice').innerHTML
  console.log(playerOneSelection)
  console.log(playerTwoSelection)

  console.log(playerOneName)
  console.log(playerTwoName)

  // Compare Two choices to find winner
  let winner = 'NO ONE WINS UNTIL THIS GET ASSIGNED'

  if (playerOneSelection === playerTwoSelection) {
    winner = 'TIE'
  }
  // p1 rock vs p2 paper && p2 paper vs p1 rock
  if (playerOneSelection === 'Rock!' && playerTwoSelection === 'Paper!') {
    winner = playerTwoName
  }
  // p1 rock vs p2 scissors && p2 scissors vs p1 rock
  if (playerOneSelection === 'Rock!' && playerTwoSelection === 'Scissors!') {
    winner = playerOneName
  }
  // p1 paper vs p2 rock && p2 rock vs p1 paper
  if (playerOneSelection === 'Paper!' && playerTwoSelection === 'Rock!') {
    winner = playerOneName
  }
  
  // p1 paper vs p2 scissors && p2 scissors vs p1 paper
  if (playerOneSelection === 'Paper!' && playerTwoSelection === 'Scissors!') {
    winner = playerTwoName
  }

  // p1 scissors vs p2 rock && p2 rock vs p1 scissors
  if (playerOneSelection === 'Scissors!' && playerTwoSelection === 'Rock!') {
    winner = playerTwoName
  }

  // p1 scissors vs p2 paper && p2 paper vs p1 scissors
  if (playerOneSelection === 'Scissors!' && playerTwoSelection === 'Paper!') {
    winner = playerOneName
  }

  // Output winner names or TIE
  document.querySelector('#winner-winner').textContent = winner
}

document.querySelector('#game-winner-button').addEventListener('click', declareWinnerButtonEvent)
document.querySelector('.p2-change-name-button').addEventListener('click', playerTwoUpdateNameButtonClickEvent)
document.querySelector('.p1-change-name-button').addEventListener('click', playerOneUpdateNameButtonClickEvent)
document.querySelector('.p1-rock-button').addEventListener('click', playerOneRockButtonSelected) 
document.querySelector('.p1-paper-button').addEventListener('click', playerOnePaperButtonSelected)
document.querySelector('.p1-scissors-button').addEventListener('click', playerOneScissorsButtonSelected)
document.querySelector('.p2-rock-button').addEventListener('click', playerTwoRockButtonSelected)
document.querySelector('.p2-paper-button').addEventListener('click', playerTwoPaperButtonSelected)
document.querySelector('.p2-scissors-button').addEventListener('click', playerTwoScissorsButtonSelected)
