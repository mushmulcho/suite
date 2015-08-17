var altr = altr || {};

(function(altr){
    function Field(deck){
        this.piles = [];
        this.deck = deck;
    }

    Field.prototype.generateGame = function () {
        //1 pile for drawing cards
        this.piles.push(model.getPile(20,20,false, 1));
        //1 pile for placing cards
        this.piles.push(model.getPile(20,175,false, 2));

        //8 piles for collecting cards
        this.piles.push(model.getPile(130,20,false, 0));
        this.piles.push(model.getPile(240,20,false, 0));
        this.piles.push(model.getPile(350,20,false, 0));
        this.piles.push(model.getPile(460,20,false, 0));
        this.piles.push(model.getPile(570,20,false, 0));
        this.piles.push(model.getPile(680,20,false, 0));
        this.piles.push(model.getPile(790,20,false, 0));
        this.piles.push(model.getPile(900,20,false, 0));

        // 7 special piles

        this.piles.push(model.getPile(130,175,true,3));
        this.piles.push(model.getPile(240,175,true,3));
        this.piles.push(model.getPile(350,175,true,3));
        this.piles.push(model.getPile(460,175,true,3));
        this.piles.push(model.getPile(570,175,true,3));
        this.piles.push(model.getPile(680,175,true,3));
        this.piles.push(model.getPile(790,175,true,3));
        // Start Placing cards for na dqdo ti chasovnika
        this.deck.shuffle();
        var curPile = 10;
        var face= true;
        for (var i = 0; i < this.deck.cards.length; i++) {
            if(curPile==0){
                face = false;
                this.deck.cards[i].face=face;
                this.piles[curPile].cards.push(this.deck.cards[i]);
            }
            else if (curPile>=10 && curPile<=16){
                if(this.piles[curPile].cards.length==7){
                    if(curPile==16){
                        curPile=0;
                        face=false;
                        this.deck.cards[i].face=face;
                        this.piles[curPile].cards.push(this.deck.cards[i]);
                        face=!face;
                    }
                    else{
                        curPile++;
                        face=true;
                        this.deck.cards[i].face=face;
                        this.piles[curPile].cards.push(this.deck.cards[i]);
                        face=!face;
                    }
                }
                else{
                    this.deck.cards[i].face=face;
                    this.piles[curPile].cards.push(this.deck.cards[i]);
                    face=!face;
                }
            }
        }
        return this.piles;
    };

    altr.getField = function(deck){
        return new Field(deck);
    }
})(altr);
