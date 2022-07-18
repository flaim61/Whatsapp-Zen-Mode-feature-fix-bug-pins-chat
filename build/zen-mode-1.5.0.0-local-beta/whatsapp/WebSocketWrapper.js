(function () {
"use strict";
class $860c2f7f54b8d8f5e69f4f19715d8112$var$WebSocketWrapper {
    constructor(ref = WebSocket){
        this._blocked = false;
        this._sockets = [];
        const _self = this;
        const wrapped = function() {
            if (_self.isBlocked()) ;
            else {
                const sock = new ref(...arguments);
                _self._sockets.push(sock);
                return sock;
            }
        };
        wrapped.prototype = ref.prototype;
        WebSocket = wrapped;
    }
    isBlocked() {
        return this._blocked;
    }
    closeAll() {
        this._sockets.forEach((s)=>{
            s.close();
        });
        this._sockets = [];
    }
    setBlockMode(block) {
        this._blocked = block;
    }
}
window['WebSocketWrapper'] = new $860c2f7f54b8d8f5e69f4f19715d8112$var$WebSocketWrapper(WebSocket); //# sourceMappingURL=WebSocketWrapper.js.map

})();
