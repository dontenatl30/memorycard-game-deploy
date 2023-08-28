import React, { useState } from "react";
import "./MemoryCard.css";

let MemoryCard = (props) => {


//   function clickHandler () {
//     setIsFlipped(!isFlipped)
//   }
 let flip = props.isFlipped === 'false' ? "MemoryCardInner" : "MemoryCardInner flipped";
 
  return (
    <div className="MemoryCard" onClick = {props.pickCard}>
      <div className={flip}>
        <div className="MemoryCardBack">
        </div>
        <div className="MemoryCardFront">
          {props.symbol}
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;


// return (
//     <div className="MemoryCard" onClick = {clickHandler}>
//       <div className={isFlipped ? "MemoryCardInner" : "MemoryCardInner flipped"}> https://dev.to/cesareferrari/conditionally-assign-a-css-class-to-a-react-component-jk5
//         <div className="MemoryCardBack">
//          <img src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg"/>
//         </div>
//         <div className="MemoryCardFront">
//           ∆
//         </div>
//       </div>
//     </div>
//   );

// useEffect (() =>{
//     setDeck(generateDeck())
//   }, [setDeck]);

// let cardsJSX = deck.map((card, index) => {
//   return <MemoryCard symbol={card.symbol}
//   isFlipped={card.isFlipped}
//   key={index}/>
// });

// function pickCard(cardIndex) {
//   if (deck[cardIndex].isFlipped == true) {
//     return; 
//   }
//   let cardToFlip = {...deck[cardIndex]}
//    cardToFlip.isFlipped = true;
   
// }


// let cardsJSX = deck.map((card, index) => {
//     return <MemoryCard symbol={card.symbol}
//     isFlipped={card.isFlipped}
//     key={index}/>
//   });
  
// function pickCard(cardIndex) {
//     if (deck[cardIndex].isFlipped == true) {
//       return d 
//     }
     
//   }