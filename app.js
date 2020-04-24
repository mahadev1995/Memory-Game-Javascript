document.addEventListener('DOMContentLoaded', () => {
  
    //card options
    const cardArray = [
        {
            name: 'ace',
            img: 'images/ace.png'
        },
        {
            name: 'king',
            img: 'images/king.png'
        },
        {
            name: 'queen',
            img: 'images/queen.png'
        },
        {
            name: 'jack',
            img: 'images/jack.png'
        },
        {
            name: 'ten',
            img: 'images/ten.png'
        },
        {
            name: 'jocker',
            img: 'images/jocker.png'
        },
        {
            name: 'ace',
            img: 'images/ace.png'
        },
        {
            name: 'king',
            img: 'images/king.png'
        },
        {
            name: 'queen',
            img: 'images/queen.png'
        },
        {
            name: 'jack',
            img: 'images/jack.png'
        },
        {
            name: 'ten',
            img: 'images/ten.png'
        },
        {
            name: 'jocker',
            img: 'images/jocker.png'
        },
    ]
    cardback = [
                {
                    name: 'back',
                    img:'images/back.png'
                },
                {
                    name: 'back1',
                    img:'images/back1.png'
                },
                {
                    name: 'back2',
                    img:'images/back2.png'
                },
                {
                    name: 'back3',
                    img:'images/back3.png'
                },
    ]
    cardArray.sort(() => 0.5-Math.random())
    cardback.sort(() => 0.5-Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const movesDisplay = document.querySelector('#moves')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
    var k = 0
    
    //Board Creation
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', cardback[0].img)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
            } 
        else {
            cards[optionOneId].setAttribute('src', cardback[0].img)
            cards[optionTwoId].setAttribute('src', cardback[0].img)
           // alert('Sorry, try again')
            }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
            var trophy = document.createElement('img')
            trophy.setAttribute('src', 'images/trophy.png')
            grid.replaceWith(trophy)
        }
  }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        k = k+1
        if(k%2 === 0){
            movesDisplay.textContent = k/2
        }
        
        if (k === 30){
            movesDisplay.textContent = 'You Exceed The Maximum Permissable Moves!!!!'
            var lost = document.createElement('img')
            lost.setAttribute('src', 'images/lost.png')
            grid.replaceWith(lost) 
        }
        if(cardsChosenId[0] === cardId){
            this.setAttribute('src', cardback[0].img)
            cardsChosen = []
            cardsChosenId = []
        }else{
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
        }
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
              
            }
        
    }

  createBoard()
})