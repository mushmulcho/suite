var model = model || {};

(function (model){

    function Card (rank,suit) {
        this.x = 55;
        this.y = 105;
        this.rank = rank;
        this.suit = suit;
        this.face = false;

    }

    Card.prototype.changePos = function (x,y) {
        this.x = x;
        this.y = y;
    };

    model.getCard = function (rank,suit) {
        return new Card(rank,suit);
    };
})(model);
