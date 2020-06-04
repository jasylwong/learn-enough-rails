document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'laughing',
      img: './images/laughing.png'
    },
    {
      name: 'laughing',
      img: './images/laughing.png'
    },    {
      name: 'sunglasses',
      img: './images/sunglasses.png'
    },    {
      name: 'sunglasses',
      img: './images/sunglasses.png'
    },    {
      name: 'wink',
      img: './images/wink.png'
    },    {
      name: 'wink',
      img: './images/wink.png'
    },
  ]

  const grid = document.querySelector('.grid')

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', './images/blank.png')
      card.setAttribute('id', i)
      grid.appendChild(card)
    }
  }

  createBoard()
})