var gfc = gfc || {};

(function(gfc){
    function Game(){
        this.deck = model.getDeck(1);
        this.field = gfc.getField(this.deck);
        this.gameLogic = gfc.getGameLogic();
    }

    gfc.getGame = function(){
        return new Game();
    }
})(gfc);
