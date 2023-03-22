document.addEventListener('DOMContentLoaded', () => {});


    //card options
    const cardArray = [
        {
            name: 'fuecoco',
            img: 'images/fuecoco.png'
        },
        {
            name: 'fuecoco',
            img: 'images/fuecoco.png'
        },
        {
            name: 'lechonk',
            img: 'images/lechonk.png'
        },
        {
            name: 'lechonk',
            img: 'images/lechonk.png'
        },
        {
            name: 'pawmi',
            img: 'images/pawmi.png'
        },
        {
            name: 'pawmi',
            img: 'images/pawmi.png'
        },
        {
            name: 'quaxly',
            img: 'images/quaxly.png'
        },
        {
            name: 'quaxly',
            img: 'images/quaxly.png'
        },
        {
            name: 'sprigatito',
            img: 'images/sprigatito.png'
        },
        {
            name: 'sprigatito',
            img: 'images/sprigatito.png'
        },
        {
            name: 'tandemaus',
            img: 'images/tandemaus.png'
        },
        {
            name: 'tandemaus',
            img: 'images/tandemaus.png'
        },
        {
            name: 'tinkaton',
            img: 'images/tinkaton.png'
        },
        {
            name: 'tinkaton',
            img: 'images/tinkaton.png'
        },
        {
            name: 'toedscruel',
            img: 'images/toedscruel.png'
        },
        {
            name: 'toedscruel',
            img: 'images/toedscruel.png'
        },
    ]


cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board
function createBoard() {
    for (let i = 0; i< cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src','images/grass.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You caught a pokemon!')
        cards[optionOneId].setAttribute('src','images/pokeball.png')
        cards[optionTwoId].setAttribute('src','images/pokeball.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/grass.png')
        cards[optionTwoId].setAttribute('src', 'images/grass.png')
        alert('Awe, it got away...')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "You're a pokemon master!"
    }
}



//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()