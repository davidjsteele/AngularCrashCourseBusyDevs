var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        //
        console.log("I drew something");
    };
    return Point;
}());
var pointer = new Point(1, 1);
pointer.draw();
