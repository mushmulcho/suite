var model = model || {};

(function (model) {
    function Event(gameApp,glob){
        this.gameApp = gameApp;
        this.canvas = glob.canvas;
        this.tempPile = model.getPile(0,0,true);
        this.tempPileNumber = null;
        this.glob = glob;
    }

    Event.prototype.mouseDownListen = function(){
        var _this = this;
        $("#canvas").bind("mousedown", function (e) {
            var mouseX = e.offsetX;
            var mouseY = e.offsetY;
            try {
                _this.tempPileNumber = _this.gameApp.ifTargetIsPile(mouseX, mouseY);
                var cardNumberInPile = _this.gameApp.cardClicked(_this.tempPileNumber, mouseY);
                if(_this.gameApp.canPickUpCards(_this.tempPileNumber, cardNumberInPile)){
                    _this.tempPile = _this.gameApp.moveCards(_this.tempPileNumber,cardNumberInPile);
                    _this.mouseMoveListen();
                }
            }
            catch(e){}
        });
    };

    Event.prototype.mouseMoveListen = function() {
        var _this = this;
        $("#canvas").bind("mousemove", function (e){
            var mouseX = e.offsetX;
            var mouseY = e.offsetY;
            _this.tempPile.changePosition(mouseX, mouseY);
            _this.glob.clearBoard();
            _this.glob.drawField(_this.gameApp);
            _this.glob.paintPile(_this.tempPile);
        })
    };

    Event.prototype.mouseUpListen = function () {
        var _this = this;
        $("#canvas").bind("mouseup", function (e){
            var mouseX = e.offsetX;
            var mouseY = e.offsetY;
            try {
                var newPileNumber = _this.gameApp.ifTargetIsPile(mouseX, mouseY, true);
                var newCardNumberInPile = _this.gameApp.cardClicked(newPileNumber);
                if(_this.gameApp.canPlaceCards(_this.tempPile, newPileNumber, newCardNumberInPile, _this.tempPile.cards[0], _this.tempPileNumber)){
                    _this.gameApp.placeCardsOnNewPile(newPileNumber,_this.tempPileNumber, _this.tempPile);
                    _this.gameApp.winCondition();
                }
                else{
                    _this.gameApp.placeCardsOnNewPile(_this.tempPileNumber, null, _this.tempPile);
                }
            }
            catch(e){
                _this.gameApp.placeCardsOnNewPile(_this.tempPileNumber, null, _this.tempPile);
            }
            finally{
                _this.tempPile = model.getPile(0,0,true);
                _this.tempPileNumber = null;
                $("#canvas").unbind("mousemove");
                _this.gameApp.executeSpecialEvents();
                _this.glob.clearBoard();
                _this.glob.drawField(_this.gameApp);
            }
        })
    };



    model.getEvent = function(gameApp,glob){
        return new Event(gameApp,glob);
    }
})(model);
