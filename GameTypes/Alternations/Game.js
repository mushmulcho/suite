var altr = altr || {};

(function(altr){
    function Game(){
        this.deck = model.getDeck(2);
        this.field = altr.getField(this.deck);
        this.gameLogic = altr.getGameLogic();
    }

    altr.getGame = function(){
        return new Game();
    }
})(altr);
