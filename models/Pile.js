var model = model || {};

(function (model){

    function Pile (x, y, cascading, type) {
        this.x = x;
        this.y = y;
        this.cascading = cascading;
        this.cards = [];
        // type 0: foundation
        // type 1: pile with facedown deck to take card from
        // type 2: pile to place cards from pile type 1
        // type 3: pile with special condition
        this.type = type;
    }

    Pile.prototype.getPile = function(){
        return this.cards;
    };

    Pile.prototype.placeCards = function (pile) {
        for (var i = 0; i < pile.cards.length; i++) {
            this.cards.push(pile.cards[i]);
        }
    };

    Pile.prototype.removeCard = function() {
        this.cards.remove(this.cards.length-1);
    };

    Pile.prototype.removeCards = function (number) {
        for (var i = 0; i < number; i++) {
            this.removeCard();
        }
    };

    Pile.prototype.changePosition = function(x, y){
        this.x = x - 45;
        this.y = y - 55;
        for (var i = 0; i < this.cards.length; i++) {
            this.cards[i].changePos(this.x, this.y + i*20);
        }
    };

    model.getPile = function (x, y, cascading, type) {
        return new Pile(x, y, cascading, type);
    };
})(model);
