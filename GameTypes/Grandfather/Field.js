var gf = gf || {};

(function(gf){
    function Field(deck){
        this.piles = [];
        this.deck = deck;
    }

    Field.prototype.generateGame = function () {
        //third 2 pile for drawing cards
        this.piles.push(model.getPile(20,10,false,1)); 
        this.piles.push(model.getPile(20,170,false,2));
        //first row
        for(var i=0;i<5;i++){
            for(var j=0;j<4;j++){
                this.piles.push(model.getPile(i*110+200,j*160+10,true,0)); 
            }
            
        }
        //second  pile for placing cards
           for(var i=0;i<2;i++){
            for(var j=0;j<4;j++){
                this.piles.push(model.getPile(i*110+800,j*160+10,false,0)); // console.log(this.piles.length-1);
            }
            
        }
     this.deck.shuffle();
        for (var i = 0; i < this.deck.cards.length; i++) {  
            if(i<20){
                this.deck.cards[i].face = true;
                this.piles[i+2].cards.push(this.deck.cards[i]);
            }
            else{
                this.piles[0].cards.push(this.deck.cards[i]);
            }
        }
        return this.piles;
    };

    Field.prototype.getPiles = function(){
        return this.piles;
    };

    gf.getField = function(deck){
        return new Field(deck);
    }
})(gf);
