var model = model || {};

(function (model) {

    function GameApp(type) {
        this.deck = {};
        this.piles = [];
        this.gameType = type;
        this.game = {};
        this.timesReloadDrawPile = 0;
    }
    GameApp.prototype.winCondition = function () {
        if (this.game.gameLogic.wonGame(this.piles)) {
            console.log("you are a faggot");
        }
    };

    GameApp.prototype.ifTargetIsPile = function (x, y, isPile) {
        for (var i = 0; i < this.piles.length; i++) {
            if(isPile){
                if (this.piles[i].cascading) {
                    if (x >= this.piles[i].x && x <= this.piles[i].x + 90 &&
                        y >= this.piles[i].y && y <= this.piles[i].y + (this.piles[i].cards.length - 1) * 20 + 135) {
                        return i;
                    }
                }
                else {
                    if (x >= this.piles[i].x && x <= this.piles[i].x + 90 &&
                        y >= this.piles[i].y && y <= this.piles[i].y + 135) {
                        return i;
                    }
                }
            }
            else{
                if (this.piles[i].cascading) {
                    if (x >= this.piles[i].x && x <= this.piles[i].x + 90 &&
                        y >= this.piles[i].y && y <= this.piles[i].y + (this.piles[i].cards.length - 1) * 20 + 155) {
                        return i;
                    }
                }
                else{
                    if (x >= this.piles[i].x && x <= this.piles[i].x + 90 &&
                        y >= this.piles[i].y && y <= this.piles[i].y + 135) {
                        return i;
                    }
                }
            }
        }
    };

    GameApp.prototype.cardClicked = function (pileNumber, mouseY) {
        var pileY = this.piles[pileNumber].y;
        var positionInPile = mouseY - pileY;
        if (this.piles[pileNumber].cards.length==0) {
            return -1;
        }
        if(this.piles[pileNumber].cascading && mouseY != undefined){
            var temp = parseInt(positionInPile / 20);
            if(temp > this.piles[pileNumber].cards.length-1 ){
                return this.piles[pileNumber].cards.length-1;
            }
            else{
                return temp;
            }
        }
        else{
            return this.piles[pileNumber].cards.length-1;
        }
    };

    GameApp.prototype.canPlaceCards = function(tempPile, pileNumber, cardNumber, cardToPlace, oldPileNumber){
        return this.game.gameLogic.canPlace(this.piles[pileNumber], tempPile, this.piles[pileNumber].cards[cardNumber], cardToPlace, pileNumber, oldPileNumber, cardNumber);
    };

    GameApp.prototype.generateGame = function () {
        if (this.gameType == "Grandfather's Clock") {
            this.game = gfc.getGame();
            this.piles = this.game.field.generateGame();
            this.deck = this.game.deck;
        }
        else if (this.gameType == "TopsyTurvi Queens") {
            this.game = ttq.getGame();
            this.piles = this.game.field.generateGame();
            this.deck = this.game.deck;
        }
        else if (this.gameType == "Prison") {
            this.game = prison.getGame();
            this.piles = this.game.field.generateGame();
            this.deck = this.game.deck;
        }
        else if (this.gameType == "Alternations") {
            this.game = altr.getGame();
            this.piles = this.game.field.generateGame();
            this.deck = this.game.deck;
        }
        else if(this.gameType == "Grandfather"){
            this.game = gf.getGame();
            this.piles = this.game.field.generateGame();
            this.deck = this.game.deck;
        }
        else if(this.gameType == "Eight Off"){
            this.game = eo.getGame();
            this.piles = this.game.field.generateGame();
            this.deck = this.game.deck;
        }
    };
    GameApp.prototype.moveCards = function (pileNumber,cardNumberInPile) {
        var tempPile = model.getPile(0,0,true);
        if(this.piles[pileNumber].type != 1){
            for (var i = cardNumberInPile; i < this.piles[pileNumber].cards.length; i++) {
                tempPile.cards.push(this.piles[pileNumber].cards[i]);
            }
            for (var i = this.piles[pileNumber].cards.length - cardNumberInPile; i > 0 ; i--) {
                this.piles[pileNumber].cards.pop();
            }
        }
        return tempPile;
    };

    GameApp.prototype.canPickUpCards = function(pileNumber, cardNumberInPile){
        return this.game.gameLogic.canPickUp(this.piles[pileNumber], pileNumber, cardNumberInPile);
    };

    GameApp.prototype.executeSpecialEvents = function(){
        this.game.gameLogic.specialConditions(this.piles);
    };

    GameApp.prototype.placeCardsOnNewPile = function(pileNumber,oldPileNumber, pile){
        if(this.piles[pileNumber].type == 1 && this.piles[oldPileNumber].type == 1){
            this.drawFromDrawingPile();
        }
        else{
            this.piles[pileNumber].placeCards(pile);
        }
    };

    GameApp.prototype.drawFromDrawingPile = function(){
        if(this.piles[0].cards.length > 0){
            this.piles[1].cards.push(this.piles[0].cards[this.piles[0].cards.length-1]);
            this.piles[1].cards[this.piles[1].cards.length-1].face = true;
            console.log(this.piles[0].cards.length);
            this.piles[0].cards.pop();
            console.log(this.piles[0].cards.length);
        }
        else{
            if(this.timesReloadDrawPile < this.game.gameLogic.timesCanRedraw){
                var cardsCount = this.piles[1].cards.length;
                for (var i = 0; i < cardsCount; i++) {
                    this.piles[0].cards.push(this.piles[1].cards[this.piles[1].cards.length-1]);
                    this.piles[0].cards[this.piles[0].cards.length-1].face = false;
                    this.piles[1].cards.pop();
                }
                this.timesReloadDrawPile++;
            }
        }
    };

    model.getGameApp = function (type) {
        return new GameApp(type);
    };
})(model);
