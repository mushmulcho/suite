var gfc = gfc || {};

(function(gfc){
    function Field(deck){
        this.piles = [];
        this.deck = deck;
    }

    Field.prototype.generateGame = function () {
        //first row
        this.piles.push(model.getPile(20,20,true, 0));
        this.piles.push(model.getPile(130,20,true, 0));
        this.piles.push(model.getPile(240,20,true, 0));
        this.piles.push(model.getPile(350,20,true, 0));
        //second row
        this.piles.push(model.getPile(20,350,true, 0));
        this.piles.push(model.getPile(130,350,true, 0));
        this.piles.push(model.getPile(240,350,true, 0));
        this.piles.push(model.getPile(350,350,true, 0));
        //clock from 12 to 11
        this.piles.push(model.getPile(610 + 120,20,false, 0));
        this.piles.push(model.getPile(720 + 120,95,false, 0));
        this.piles.push(model.getPile(830 + 120,170,false, 0));
        this.piles.push(model.getPile(895 + 120,325,false, 0));
        this.piles.push(model.getPile(830 + 120,480,false, 0));
        this.piles.push(model.getPile(720 + 120,575,false, 0));
        this.piles.push(model.getPile(610 + 120,650,false, 0));
        this.piles.push(model.getPile(500 + 120,575,false, 0));
        this.piles.push(model.getPile(390 + 120,480,false, 0));
        this.piles.push(model.getPile(345 + 120,325,false, 0));
        this.piles.push(model.getPile(390 + 120,170,false, 0));
        this.piles.push(model.getPile(500 + 120,95,false, 0));
        // Start Placing cards for na dqdo ti chasovnika
        this.deck.shuffle();
        var curPile = 0;
        for (var i = 0; i < this.deck.cards.length; i++) {
            this.deck.cards[i].face = true;
            var cardToCheck = this.deck.cards[i].rank + this.deck.cards[i].suit;
            switch (cardToCheck) {
                case "9S":
                    this.piles[8].cards.push(this.deck.cards[i]);
                    break;
                case "10H":
                    this.piles[9].cards.push(this.deck.cards[i]);
                    break;
                case "JC":
                    this.piles[10].cards.push(this.deck.cards[i]);
                    break;
                case "QD":
                    this.piles[11].cards.push(this.deck.cards[i]);
                    break;
                case "KS":
                    this.piles[12].cards.push(this.deck.cards[i]);
                    break;
                case "2H":
                    this.piles[13].cards.push(this.deck.cards[i]);
                    break;
                case "3C":
                    this.piles[14].cards.push(this.deck.cards[i]);
                    break;
                case "4D":
                    this.piles[15].cards.push(this.deck.cards[i]);
                    break;
                case "5S":
                    this.piles[16].cards.push(this.deck.cards[i]);
                    break;
                case "6H":
                    this.piles[17].cards.push(this.deck.cards[i]);
                    break;
                case "7C":
                    this.piles[18].cards.push(this.deck.cards[i]);
                    break;
                case "8D":
                    this.piles[19].cards.push(this.deck.cards[i]);
                    break;
                default :
                    this.piles[curPile].cards.push(this.deck.cards[i]);
                    if (this.piles[curPile].cards.length==5) {
                        curPile++;
                    }
                    break;
            }
        }

        return this.piles;
    };

    gfc.getField = function(deck){
        return new Field(deck);
    }
})(gfc);
