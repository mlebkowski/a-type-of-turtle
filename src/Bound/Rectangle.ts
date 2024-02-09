interface Point {
  x: number;
  y: number;
}

export class Rectangle {
  private readonly topRight: Point;
  private readonly bottomLeft: Point;

  constructor(alpha: Point, bravo: Point) {
    if (alpha.x === bravo.x || alpha.y === bravo.y) {
      throw new Error("Rectangle needs to have two dimensions");
    }

    this.bottomLeft = {
      x: Math.min(alpha.x, bravo.x),
      y: Math.min(alpha.y, bravo.y),
    };
    this.topRight = {
      x: Math.max(alpha.x, bravo.x),
      y: Math.max(alpha.y, bravo.y),
    };
  }

  contains(point: Point) {
    return (
      this.bottomLeft.x <= point.x &&
      point.x <= this.topRight.x &&
      this.bottomLeft.y <= point.y &&
      point.y <= this.topRight.y
    );
  }

  toString() {
    return `Rectangle<${this.bottomLeft.x}×${this.bottomLeft.y}, ${this.topRight.x}×${this.topRight.y}>`;
  }
}
