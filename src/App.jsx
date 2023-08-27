import React, { useState, useEffect } from "react";
import MemoryCard from './components/MemoryCard'; 
import './App.css';


function App() {
const [deck, setDeck] = useState([]);
const [pickedCards, setPickedCards] = useState([]);

function generateDeck() {
    const symbols = [ "∆", "ß", "£", "§", "•", "$", "+", "ø" ];
    const deck =[];
    for (let i = 0; i < 16; i++) {
      const card = {
        isFlipped: "false",
        symbol: symbols[i % 8]
      };
      deck.push(card)
      }
      return shuffle(deck)
}


function shuffle(deck) {
  var j, x, i;
  for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
  }
  return deck;
}


  useEffect (() =>{
    setDeck(generateDeck())
  }, [setDeck]);

let cardsJSX = deck.map((card, index) => {
    return <MemoryCard symbol={card.symbol}
    isFlipped={card.isFlipped}
    key={index}
    pickCard={() => pickCard(index)}/>
  });
  

  function unflipCards (card1index, card2index) {
    let card1 = {...deck[card1index], isFlipped: "false"}
    let card2 = {...deck[card2index], isFlipped: "false"}
    let newDeck = deck.map((card,index) => {
      if (card1index === index) {
        return card1
      } if (card2index === index) {
        return card2
      }
      return card
    })
    setDeck(newDeck)
  }

  function pickCard (cardIndex) {
    if (deck[cardIndex].isFlipped === "false") {
      let cardToFlip = {...deck[cardIndex], isFlipped: "true"}
      let newPickedCards = pickedCards.concat(cardIndex)
      let newDeck = deck.map((card,index) => {
        if (cardIndex === index) {
          return cardToFlip
        }
        return card
      })

      if (newPickedCards.length == 2) {
        let card1index = newPickedCards[0]
        let card2index = newPickedCards[1]
        if(deck[card1index].symbol !== deck[card2index].symbol) {
          setTimeout(() =>  {unflipCards(card1index,card2index); setPickedCards([]);}, 1000)
        } else {
          //empty the cards array because the player found a match
          newPickedCards = []
        }
      }

      setDeck(newDeck)
      setPickedCards(newPickedCards)
      }else if (deck[cardIndex].isFlipped === "true") {
        return;
      }

  }
      

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Memory Game</h1> 
        <h2>Match cards to win</h2>
      </header>
      <div className="card-grid">

          <div className="card-row"> </div>
          <div>{cardsJSX.slice(0,4)}</div>
          <div>{cardsJSX.slice(4,8)}</div>
          <div>{cardsJSX.slice(8,12)}</div>
         <div>{cardsJSX.slice(12,16)}</div>

      </div>

    </div>
  );
}

export default App;


// first deployed project 