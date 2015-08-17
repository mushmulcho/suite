var gf = gf || {};

(function(gf){
    function GameLogic(){
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
        this.timesCanRedraw = 1;
    }

    GameLogic.prototype.specialConditions = function (){

    };
    
    GameLogic.prototype.canPickUp = function(pile, pileNumber, cardPosition){
        //for drawing pile
        if(pileNumber==0){
            return true;
        }
        //for placeable pile
        else if(pileNumber == 1 && pile.cards.length > 0){
            return true;
        }
        //for all other pick up cards
        else if(pileNumber < 22){
            return true;
        }
        
        else{
            return false;
        }
    };
    GameLogic.prototype.wonGame = function (piles) {
        if (piles[22].cards.length==13 &&
            piles[23].cards.length==13 &&
            piles[24].cards.length==13 &&
            piles[25].cards.length==13 &&
            piles[26].cards.length==13 &&
            piles[27].cards.length==13 &&
            piles[28].cards.length==13 &&
            piles[29].cards.length==13) {
            return true;
        }
    };
    GameLogic.prototype.canPlace = function(fieldPile, tempPile, fieldPileCard, tempPileCard, pileNumber, oldPileNumber, cardNumber){
        //can we draw card
        if(pileNumber == 0 && oldPileNumber == 0) {
            return true;
        }
        //can we place on placeble pile
        else if(pileNumber==1){
            return false;
        }
        else if(pileNumber < 22){
            if(cardNumber== -1 || cardNumber == 0) {
                return true;
            }
            else{
                return false;
            }
        }
        else if(pileNumber < 26){

            if(tempPileCard.rank == "A"){
                if(fieldPileCard == undefined){
                    return true;
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
            }
        }
        else if(pileNumber<30) {
            if(tempPileCard.rank == "K"){
              /*// for(var i=24;i<28;i++){
                if(tempPileCard.suit == pile[24].cards[0].suit){
                    return false;
                }
            //}*/
                return true;
            }
            else if(fieldPileCard.suit == tempPileCard.suit){
                if(this.ranks.indexOf(fieldPileCard.rank) - 1 == this.ranks.indexOf(tempPileCard.rank)){
                    return true;
                }
                else if(fieldPileCard.rank == "2" && tempPileCard.rank == "A"){
                    return true;
                } 
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    };

    gf.getGameLogic = function(){
        return new GameLogic();
    }
})(gf);
