var prison = prison || {};

(function(prison){
    function Game(){
        this.deck = model.getDeck(1);
        this.field = prison.getField(this.deck);
        this.gameLogic = prison.getGameLogic();
    }

    prison.getGame = function(){
        return new Game();
    }
})(prison);
