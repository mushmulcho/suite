var altr = altr || {};

(function(altr){
    function GameLogic(){
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
        this.timesCanRedraw = 1;
    }

    GameLogic.prototype.specialConditions = function (piles){
        for (var i = 10; i <= 16; i++) {
            if(piles[i].cards.length != 0 && piles[i].cards[piles[i].cards.length-1].face==false){
                piles[i].cards[piles[i].cards.length-1].face=true;
            }
        }

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
        //for the 8 collectable piles
        else if(pileNumber>=2 && pileNumber<=9){
            return false;
        }
        //for the rest 7 piles
        else if(pileNumber>=10 && pileNumber<=16){
            if(cardPosition == pile.cards.length-1){
                return true;
            }
            else if(pile.cards.length==0){
                return false;
            }
            else{
                for (var i = cardPosition + 1; i < pile.cards.length; i++) {
                    if(pile.cards[i].face==false||pile.cards[i-1].face==false){
                        return false;
                    }
                    if(pile.cards[i].rank == "A" && pile.cards[i-1].rank == "2"){

                    }
                    else if(this.ranks.indexOf(pile.cards[i].rank) + 1 != this.ranks.indexOf(pile.cards[i - 1].rank)){
                        return false;
                    }

                }
                return true;
            }
        }
        else {
            return false;
        }
    };
    GameLogic.prototype.wonGame = function (piles) {
        if (piles[2].cards.length==13 &&
            piles[3].cards.length==13 &&
            piles[4].cards.length==13 &&
            piles[5].cards.length==13 &&
            piles[6].cards.length==13 &&
            piles[7].cards.length==13 &&
            piles[8].cards.length==13 &&
            piles[9].cards.length==13 ) {

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
        //can we place cards on the next 8 piles
        else if(pileNumber>=2 && pileNumber<=9){
            if(tempPile.cards.length>1){
                return false;
            }
            else{
                if(fieldPile.cards.length==0 && tempPileCard.rank=="A"){
                    return true;
                }
                else if(fieldPile.cards[fieldPile.cards.length-1].suit != tempPile.cards[0].suit){
                    return false;
                }
                else if(fieldPile.cards.length==13){
                    return false;
                }
                else if(fieldPile.cards.length>0){
                    if(fieldPileCard.rank=="A"&& tempPileCard.rank=="2"){
                        return true;
                    }
                    else if(this.ranks.indexOf(fieldPileCard.rank)+1==this.ranks.indexOf(tempPileCard.rank)){
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else{
                    return false;
                }
            }
        }
        //can we place cards on last 7 piles
        else if(pileNumber>=10 && pileNumber<=16){
            if(fieldPile.cards.length==0){
                return true;
            }
            else if(this.ranks.indexOf(fieldPile.cards[fieldPile.cards.length-1].rank)-1==
                this.ranks.indexOf(tempPile.cards[0].rank)){
                return true;
            }
            else{
                return false;
            }
        }
        else {
            return false;
        }
    };

    altr.getGameLogic = function(){
        return new GameLogic();
    }
})(altr);
