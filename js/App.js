import React from 'react';
import { render } from 'react-dom';

import MemoryCard from './MemoryCard'

class App extends React.Component {
   constructor(props) {
      super(props);

      this.cards = [
         { id: 1, value: 1, found: 0},
         { id: 2, value: 1, found: 0},
         { id: 3, value: 2, found: 0},
         { id: 4, value: 2, found: 0},
         { id: 5, value: 3, found: 0},
         { id: 6, value: 3, found: 0},
         { id: 7, value: 4, found: 0},
         { id: 8, value: 4, found: 0},
         { id: 9, value: 5, found: 0},
         { id: 10, value: 5, found: 0},
         { id: 11, value: 6, found: 0},
         { id: 12, value: 6, found: 0},
         { id: 13, value: 7, found: 0},
         { id: 14, value: 7, found: 0},
         { id: 15, value: 8, found: 0},
         { id: 16, value: 8, found: 0}
      ];

      this.state = {
         currentGameCards: [],
         pickedCards: []
      }
   }

   randomCardFunction() {
        let tmpCards = [];

        tmpCards = this.cards.sort(() => Math.random() - 0.5);

        this.setState({ currentGameCards : tmpCards });
   }

   componentDidMount() {
        this.randomCardFunction();
   }

   render () { 
      return (
        <article>
            <h1>Memory Game</h1>
            <section className="grid">
                {this.state.currentGameCards.map((card, index) => {
                    return <MemoryCard value={card.value} id={index} found={card.found} key={index.toString()} />
                })}
            </section>
        </article>
      );
   }
}

export default App;