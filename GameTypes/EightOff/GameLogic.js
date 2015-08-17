var eo = eo || {};

(function(eo){
    function GameLogic(){
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
    }

    GameLogic.prototype.specialConditions = function (piles){
        /*for (var i = 10; i <= 16; i++) {
            if(piles[i].cards.length != 0 && piles[i].cards[piles[i].cards.length-1].face==false){
                piles[i].cards[piles[i].cards.length-1].face=true;
            }
        }*/

    };
    GameLogic.prototype.canPickUp = function(pile, pileNumber, cardPosition){
        //pick 
        if(pileNumber >= 0 && pileNumber < 8){
            if(cardPosition == pile.cards.length-1){
                return true;
            }
            else if(pile.cards.length==0){
                return false;
            }
            else{
                for (var i = cardPosition + 1; i < pile.cards.length; i++) {
                    if(pile.cards[i].rank == "A" && pile.cards[i-1].rank == "2"){

                    }
                    else if(this.ranks.indexOf(pile.cards[i].rank) + 1 != this.ranks.indexOf(pile.cards[i - 1].rank)){
                        return false;
                    }

                }
                return true;
            }
        }
        else if(pileNumber >= 8 && pileNumber < 16){
            return true;
        }
        else{
            return false;
        }
    };
    //won condition
    GameLogic.prototype.wonGame = function (piles) {
        if (piles[16].cards.length==13 &&
            piles[17].cards.length==13 &&
            piles[18].cards.length==13 &&
            piles[19].cards.length==13) {
            return true;
        }
    };

GameLogic.prototype.canPlace = function(fieldPile, tempPile, fieldPileCard, tempPileCard, pileNumber, oldPileNumber, cardNumber){
    //can we place cards on the next 16 piles
    if(pileNumber>=0 && pileNumber<=7){
        if(cardNumber== -1) {
                return true;
        }
        else if(this.ranks.indexOf(fieldPileCard.rank) - 1 == this.ranks.indexOf(tempPileCard.rank) && fieldPileCard.suit == tempPileCard.suit){
            return true;
        }
        else{
            return false;
        }
    }
    else if(pileNumber>=10 && pileNumber<=15){
        if(cardNumber== -1) {
            return true;
        }
        else{
            return false;
        }
    }
    //can we place cards on last 4 piles
    else if(pileNumber>=16 && pileNumber<=19){
        if(fieldPile.cards.length==0 && tempPileCard.rank=="A"){
            return true;
        }
        else if(fieldPileCard.suit == tempPileCard.suit){
            if(fieldPileCard.rank=="A"&& tempPileCard.rank=="2"){
                return true;
            }
            else if(this.ranks.indexOf(fieldPileCard.rank)==
                this.ranks.indexOf(tempPileCard.rank) - 1){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
        
    }
    else {
        return false;
    }
};
        /*if(pileNumber < 8){
            if(cardNumber== -1) {
                return true;
            }
            
            if(this.ranks.indexOf(fieldPileCard.rank) - 1 == this.ranks.indexOf(tempPileCard.rank) && fieldPileCard.suit == tempPileCard.suit){
                return true;
            }
            else{
                return false;
            }
        }
        else if(pileNumber<16 && cardNumber == -1){
            return true;
        }
        else if(tempPileCard.rank == "A"){
            return true;
        }
        else{
            if(fieldPileCard.suit == tempPileCard.suit){

                if(fieldPileCard.rank == "A" && tempPileCard.rank == "2"){
                    return true;
                }
                else if(this.ranks.indexOf(fieldPileCard.rank) == this.ranks.indexOf(tempPileCard.rank) - 1){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
    };*/

    eo.getGameLogic = function(){
        return new GameLogic();
    }
})(eo);
