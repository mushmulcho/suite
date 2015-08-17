var gf = gf || {};

(function(gf){
    function Game(){
        this.deck = model.getDeck(2);
        this.field = gf.getField(this.deck);
        this.gameLogic = gf.getGameLogic();
    }

    gf.getGame = function(){
        return new Game();
    }
})(gf);
