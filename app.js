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
    }
  ]

  const grid = document.querySelector('.grid')
  let cardsChosen = []
  let cardsChosenId = []
  let score = 0
  document.getElementById('result').textContent = score

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
      alert('Match!')
      score += 2
      document.getElementById('result').textContent = score
    } else {
      cards[cardsChosenId[0]].setAttribute('src', './images/blank.png')
      cards[cardsChosenId[1]].setAttribute('src', './images/blank.png')
      alert('No match! Try again')
    }
    cardsChosen = []
    cardsChosenId = []
  }

  // Flip your card
  function flipCard() {
    let cardId = this.getAttribute('id')
    this.setAttribute('src', cardArray[cardId].img)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    if (cardsChosen.length === 2) { 
      setTimeout(checkForMatch, 500) 
    } 
  }


  createBoard()
})