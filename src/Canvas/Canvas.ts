export interface Canvas {
  draw(line: Line): void;
}

export interface Line {
  start: Point;
  end: Point;
}

export interface Point {
  x: number;
  y: number;
}
