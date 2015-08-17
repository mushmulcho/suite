var prison = prison || {};

(function(prison){
    function Field(deck){
        this.piles = [];
        this.deck = deck;
    }

    Field.prototype.generateGame = function () {
        //4 piles for collect cards
        this.piles.push(model.getPile(350,20,false, 0));
        this.piles.push(model.getPile(460,20,false, 0));
        this.piles.push(model.getPile(570,20,false, 0));
        this.piles.push(model.getPile(680,20,false, 0));

        //drawing 7 special piles with flipped card and 1 without flipped card foundation piles

        this.piles.push(model.getPile(130,175,false,0));
        this.piles.push(model.getPile(240,175,false,0));
        this.piles.push(model.getPile(350,175,false,0));
        this.piles.push(model.getPile(460,175,false,0));
        this.piles.push(model.getPile(570,175,false,0));
        this.piles.push(model.getPile(680,175,false,0));
        this.piles.push(model.getPile(790,175,false,0));
        this.piles.push(model.getPile(900,175,false,0));
        //8 piles that will be cascading and can take cards

        this.piles.push(model.getPile(20,330,true, 0));
        this.piles.push(model.getPile(130,330,true, 0));
        this.piles.push(model.getPile(240,330,true, 0));
        this.piles.push(model.getPile(350,330,true, 0));
        this.piles.push(model.getPile(460,330,true, 0));
        this.piles.push(model.getPile(570,330,true, 0));
        this.piles.push(model.getPile(680,330,true, 0));
        this.piles.push(model.getPile(790,330,true, 0));
        this.piles.push(model.getPile(900,330,true, 0));
        this.piles.push(model.getPile(1010,330,true, 0));
        // Start Placing cards for na dqdo ti chasovnika
        this.deck.shuffle();
        var randomCard = Math.floor((Math.random() * 12) + 1);
        var colPile = 0;
        var curPile = 4;
        for (var i = 0; i < this.deck.cards.length; i++) {
            this.deck.cards[i].face=true;
            if(this.deck.ranks.indexOf(this.deck.cards[i].rank)==randomCard){
                this.piles[colPile].cards.push(this.deck.cards[i]);
                colPile++;
            }
            else {
                if(curPile>=4&&curPile<=11){
                    this.piles[curPile].cards.push(this.deck.cards[i]);
                    curPile++;
                }
                else{
                    this.piles[curPile].cards.push(this.deck.cards[i]);
                    if(this.piles[curPile].cards.length==4){
                        curPile++;
                    }
                }
            }
        }
        return this.piles;
    };

    prison.getField = function(deck){
        return new Field(deck);
    }
})(prison);
