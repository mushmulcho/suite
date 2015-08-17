var gfc = gfc || {};

(function(gfc){
    function GameLogic(){
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
    }

    GameLogic.prototype.specialConditions = function (){

    };

    GameLogic.prototype.canPickUp = function(pile, pileNumber, cardPosition){
        if(cardPosition == pile.cards.length-1 && pileNumber < 8){
            return true;
        }
        else{
            return false;
        }
    };
        GameLogic.prototype.wonGame = function (piles) {
        if (piles[20].cards.length==13 &&
            piles[21].cards.length==13 &&
            piles[22].cards.length==13 &&
            piles[23].cards.length==13 &&
            piles[24].cards.length==13 &&
            piles[25].cards.length==13 &&
            piles[26].cards.length==13 &&
            piles[27].cards.length==13) {
            return true;
        }
    };
    GameLogic.prototype.canPlace = function(fieldPile, tempPile,fieldPileCard, tempPileCard, pileNumber,oldPileNumber, cardNumber){

        if(pileNumber < 8){
            if(cardNumber== -1) {
                return true;
            }
            if(fieldPileCard.rank == "2" && tempPileCard.rank == "A"){
                return true;
            }
            else if(this.ranks.indexOf(fieldPileCard.rank) - 1 == this.ranks.indexOf(tempPileCard.rank)){
                return true;
            }
            else{
                return false;
            }
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
    };

    gfc.getGameLogic = function(){
        return new GameLogic();
    }
})(gfc);
