

$(window).ready(function () {
    glob = scope.getGlobalFunctions();
    deck = model.getDeck(1);
    glob.loadCards(deck);
    glob.drawAllCards(deck);
});
function startGame(value) {
    var game = model.getGameApp(value);
    var events = model.getEvent(game,glob);
    glob.clearBoard();
    game.generateGame();
    glob.drawField(game);
    events.mouseDownListen();
    events.mouseUpListen();
}








