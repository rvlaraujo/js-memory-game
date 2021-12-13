document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'borussia',
      img: '../assets/images/borussia.png'
    },
    {
      name: 'flamengo',
      img: '../assets/images/flamengo.png'
    },
    {
      name: 'liverpool',
      img: '../assets/images/liverpool.png'
    },
    {
      name: 'milan',
      img: '../assets/images/milan.png'
    },
    {
      name: 'realmadrid',
      img: '../assets/images/realmadrid.png'
    },
    {
      name: 'borussia',
      img: '../assets/images/borussia.png'
    },
    {
      name: 'flamengo',
      img: '../assets/images/flamengo.png'
    },
    {
      name: 'liverpool',
      img: '../assets/images/liverpool.png'
    },
    {
      name: 'milan',
      img: '../assets/images/milan.png'
    },
    {
      name: 'realmadrid',
      img: '../assets/images/realmadrid.png'
    }
  ];

  // shuffle the cards
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsWon = [];
  let cardsChosenId = [];

  function createBoardGrid() {
    for (let index = 0; index < cardArray.length; index++) {
      const card = document.createElement('img');
      card.setAttribute('src', '../assets/images/blank.png');
      card.setAttribute('data-id', index);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '../assets/images/blank.png');
      cards[optionTwoId].setAttribute('src', '../assets/images/blank.png');

      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');

      cards[optionOneId].setAttribute('src', '../assets/images/white.png');
      cards[optionTwoId].setAttribute('src', '../assets/images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);

      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', '../assets/images/blank.png');
      cards[optionTwoId].setAttribute('src', '../assets/images/blank.png');

      alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenId = [];

    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congrats. You match all cards!';
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoardGrid();
});