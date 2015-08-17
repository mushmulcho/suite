var ttq = ttq || {};

(function(ttq){
    function Field(deck){
        this.piles = [];
        this.deck = deck;
    }

    Field.prototype.generateGame = function () {
        //drawing pile and pile for drawn cards
        this.piles.push(model.getPile(20,20,false, 1));
        this.piles.push(model.getPile(20,175,false, 2));

        //drawing 7 special piles with flipped card and 1 without flipped card foundation piles

        this.piles.push(model.getPile(130,20,false,3));
        this.piles.push(model.getPile(240,20,false,3));
        this.piles.push(model.getPile(350,20,false,3));
        this.piles.push(model.getPile(460,20,false,3));
        this.piles.push(model.getPile(570,20,false,3));
        this.piles.push(model.getPile(680,20,false,3));
        this.piles.push(model.getPile(790,20,false,3));
        this.piles.push(model.getPile(900,20,false,0));
        //8 piles that will be cascading and can take cards

        this.piles.push(model.getPile(130,175,true, 0));
        this.piles.push(model.getPile(240,175,true, 0));
        this.piles.push(model.getPile(350,175,true, 0));
        this.piles.push(model.getPile(460,175,true, 0));
        this.piles.push(model.getPile(570,175,true, 0));
        this.piles.push(model.getPile(680,175,true, 0));
        this.piles.push(model.getPile(790,175,true, 0));
        this.piles.push(model.getPile(900,175,true, 0));
        // Start Placing cards for na dqdo ti chasovnika
        this.deck.shuffle();
        var curPile = 2;
        for (var i = 0; i < this.deck.cards.length; i++) {
            if((curPile>=2 && curPile<=8)||this.piles[17].cards.length == 4){
                this.deck.cards[i].face = false;
            }
            else {
                this.deck.cards[i].face = true;
            }

            this.piles[curPile].cards.push(this.deck.cards[i]);

            if (curPile==8) {
                curPile=10;
            }
            else if(curPile>=2 && curPile<=8 ){
                curPile++;
            }
            else if(curPile == 0){
            }
            else{
                if(this.piles[curPile].cards.length == 4){
                    if(curPile == 17){
                        curPile = 0;
                    }
                    else{
                        curPile++;
                    }
                }
            }
        }
        return this.piles;
    };

    ttq.getField = function(deck){
        return new Field(deck);
    }
})(ttq);
