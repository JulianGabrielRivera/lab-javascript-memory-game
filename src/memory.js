class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
   if(!this.cards){
    return undefined
   }
    else{

    let pointer = 0
    for(let i=0;i<this.cards.length;i++){
      [this.cards[i], this.cards[pointer+1] ]= [this.cards[pointer+1], this.cards[i]]
    }
  }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked = this.pairsClicked+1
    if(card1 === card2){
      this.pairsGuessed = this.pairsGuessed+1;
      return true;
    }
    else{
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
  }
}
