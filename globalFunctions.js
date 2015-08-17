var scope = scope || {};

(function (scope){

    function GlobalFunctions () {
        this.width = 90;
        this.height = 135;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    GlobalFunctions.prototype.drawField = function (field) {
        for (var i = 0; i < field.piles.length; i++) {
            var pile = field.piles[i];
            this.ctx.strokeStyle = "black 1px radius: 2px";
            this.ctx.strokeRect(pile.x + 3, pile.y + 3, 84, 129);
            for (var j = 0; j < pile.cards.length; j++) {
                var card = pile.cards[j];
                card.x = pile.x;
                if (pile.cascading) {
                    card.y = pile.y + j*20;
                }
                else {
                    card.y = pile.y;
                }

                this.paintCard(card);

            }
        }
    };


    GlobalFunctions.prototype.loadCards = function (deck) {
        for (var i = 0; i < deck.cards.length; i++) {
            var img = new Image();
            img.src = "https://drive.google.com/folderview?id=0B5FT30-zbj8KfnUxeEtiNzBhaUpjRkY4WTBBVExzUkVDeXN6SWI2bjh3cmVRcjBEcVctVjg&usp=sharing" + deck.cards[i].rank + deck.cards[i].suit + ".png";
            deck.cards[i].image= img;

        }
    };
    GlobalFunctions.prototype.paintCard =function (card) {
        var context = this.ctx;
        var img = new Image();
        if(card.face){
            img.src = "https://drive.google.com/folderview?id=0B5FT30-zbj8KfnUxeEtiNzBhaUpjRkY4WTBBVExzUkVDeXN6SWI2bjh3cmVRcjBEcVctVjg&usp=sharing" +card.rank + card.suit + ".png";
        }
        else{
            img.src = "https://drive.google.com/folderview?id=0B5FT30-zbj8KfnUxeEtiNzBhaUpjRkY4WTBBVExzUkVDeXN6SWI2bjh3cmVRcjBEcVctVjg&usp=sharing/backlizard.png";
        }

        img.onload = function () {
            context.drawImage(img, card.x, card.y);
        }
    } ;
    GlobalFunctions.prototype.paintPile = function (pile) {
        for (var i = 0; i < pile.cards.length; i++) {
            this.paintCard(pile.cards[i]);
        }
    };


    GlobalFunctions.prototype.drawAllCards = function(deck) {
        for (var i = 0; i < deck.cards.length; i++) {
            this.paintCard(deck.cards[i]);
        }
    };

    GlobalFunctions.prototype.clearBoard = function () {
        this.ctx.clearRect(0,0,1200,900);
    };
    scope.getGlobalFunctions = function () {
        return new GlobalFunctions();
    };


})(scope);
