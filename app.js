document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'laughing',
      img: './images/laughing.png'
    },
    {
      name: 'laughing',
      img: './images/laughing.png'
    },    
    {
      name: 'sunglasses',
      img: './images/sunglasses.png'
    },
    {
      name: 'sunglasses',
      img: './images/sunglasses.png'
    },
    {
      name: 'wink',
      img: './images/wink.png'
    },
    {
      name: 'wink',
      img: './images/wink.png'
    },
    {
      name: 'hearts',
      img: './images/hearts.png'
    },
    {
      name: 'hearts',
      img: './images/hearts.png'
    },
    {
      name: 'angel',
      img: './images/angel.png'
    },
    {
      name: 'angel',
      img: './images/angel.png'
    },
    {
      name: 'fearful',
      img: './images/fearful.png'
    },
    {
      name: 'fearful',
      img: './images/fearful.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  const resultsDisplay = document.getElementById('result')

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', './images/blank.png')
      card.setAttribute('id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // Check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!')
      cardsWon.push(...cardsChosen)
      resultsDisplay.textContent = cardsWon.length
    } else {
      cards[cardsChosenId[0]].setAttribute('src', './images/blank.png')
      cards[cardsChosenId[1]].setAttribute('src', './images/blank.png')
      alert('No match! Try again')
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === cardArray.length) { alert('You win!') }
  }

  // Flip your card
  function flipCard() {
    let cardId = this.getAttribute('id')
    this.setAttribute('src', cardArray[cardId].img)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    if (cardsChosen.length === 2) { 
      setTimeout(checkForMatch, 400) 
    } 
  }

  createBoard()
})