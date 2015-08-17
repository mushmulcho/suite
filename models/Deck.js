var model = model || {};

(function (model) {

    function Deck (number) {
        this.cards = [];
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
        this.createDeck(number);
    }


    Deck.prototype.createDeck = function (number) {
        for (var i = 0; i < number; i++) {
            for (var j = 0; j < this.ranks.length; j++) {
                for (var k = 0; k < this.suits.length; k++) {
                    this.cards.push(model.getCard(this.ranks[j],this.suits[k]));
                }
            }
        }
    };

    Deck.prototype.showCards = function () {
        console.log(this.cards);
    };

    Deck.prototype.shuffle = function () {
        var someArray = this.cards;
        var theLength = someArray.length - 1;
        var toSwap; // The index we will swap  (i.e. the random number)
        var temp; // A temporary variable to hold reference to index variable i points to
        for (var i = theLength; i > 0; i--) {
            toSwap = Math.floor(Math.random() * i);
            temp = someArray[i];
            someArray[i] = someArray[toSwap];
            someArray[toSwap] = temp;
        }
    };

    model.getDeck = function (number) {
        return new Deck(number);
    }
})(model);
