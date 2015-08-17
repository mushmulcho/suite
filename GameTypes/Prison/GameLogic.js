var prison = prison || {};

(function(prison){
    function GameLogic(){
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
        this.timesCanRedraw = 0;
    }

    GameLogic.prototype.specialConditions = function (piles){

    };
    GameLogic.prototype.canPickUp = function(pile, pileNumber, cardPosition){
        //for the first 4 piles
        if(pileNumber>=0&&pileNumber<=3){
            return false;
        }
        //for the next 8 one card piles
        else if(pileNumber>=4&&pileNumber<=11){
            if(pile.cards.length==1){
                return true;
            }
            else{
                return false;
            }

        }
        // for the last 10 piles
        else{
            if(pile.cards.length-1==cardPosition){
                return true;
            }
            else{
                return false;
            }
        }
    };
    GameLogic.prototype.wonGame = function (piles) {
        if (piles[0].cards.length==13 &&
            piles[1].cards.length==13 &&
            piles[2].cards.length==13 &&
            piles[3].cards.length==13 ) {

            return true;
        }
    };
    GameLogic.prototype.canPlace = function(fieldPile, tempPile, fieldPileCard, tempPileCard, pileNumber, oldPileNumber, cardNumber){

        //can we place cards on the first 4 piles
        if(pileNumber>=0&&pileNumber<=3){
            if(fieldPile.cards[fieldPile.cards.length-1].suit == tempPileCard.suit){
                if(fieldPile.cards[fieldPile.cards.length-1].rank=="A"&&
                    tempPileCard.rank=="2"){
                    return true;
                }
                else if(this.ranks.indexOf(fieldPile.cards[fieldPile.cards.length-1].rank)+1==
                    this.ranks.indexOf(tempPileCard.rank)){
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
        //can we place card on the next 8 one card piles
        else if(pileNumber>=4&&pileNumber<=11){
            if(fieldPile.cards.length==0) {
                return true;
            }
            else{
                return false;
            }

        }
        // can we place cards on the last 10 piles
        else if(pileNumber>=12&&pileNumber<=22){
            if(fieldPile.cards.length==0){
                return true;
            }
            else if(fieldPile.cards[fieldPile.cards.length-1].suit == tempPileCard.suit){
                if(fieldPile.cards[fieldPile.cards.length-1].rank=="2"&&
                    tempPileCard.rank=="A"){
                    return true;
                }
                else if(this.ranks.indexOf(fieldPile.cards[fieldPile.cards.length-1].rank)-1==
                    this.ranks.indexOf(tempPileCard.rank)){
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
        else{
            return false;
        }
    };

    prison.getGameLogic = function(){
        return new GameLogic();
    }
})(prison);
