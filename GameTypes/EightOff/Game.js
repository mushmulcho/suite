var eo = eo || {};

(function(eo){
    function Game(){
        this.deck = model.getDeck(1);
        this.field = eo.getField(this.deck);
        this.gameLogic = eo.getGameLogic();
    }

    eo.getGame = function(){
        return new Game();
    }
})(eo);
