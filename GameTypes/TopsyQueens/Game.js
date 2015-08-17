var ttq = ttq || {};

(function(ttq){
    function Game(){
        this.deck = model.getDeck(2);
        this.field = ttq.getField(this.deck);
        this.gameLogic = ttq.getGameLogic();
    }

    ttq.getGame = function(){
        return new Game();
    }
})(ttq);
