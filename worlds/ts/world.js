var Place = (function () {
    function Place(contents) {
        if (typeof contents === "undefined") { contents = []; }
        this.contents = contents;
    }
    return Place;
})();

var Player = (function () {
    function Player() {
    }
    return Player;
})();

var me = new Player();

var p = { location: null };

var data = {
    'My House': new Place()
};
