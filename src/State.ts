export class Angle {
  constructor(public readonly degrees: number) {
    this.degrees = ((degrees % 360) + 360) % 360;
  }

  get rad() {
    return (this.degrees * Math.PI) / 180;
  }

  sub(other: Angle) {
    return new Angle(this.degrees - other.degrees);
  }

  add(other: Angle) {
    return new Angle(this.degrees + other.degrees);
  }

  toString() {
    return `${this.degrees}°`;
  }
}

const Up = "up";
const Down = "down";

export class Pen {
  static up() {
    return new Pen(Up);
  }
  static down() {
    return new Pen(Down);
  }

  private constructor(private readonly state: string) {}

  isUp() {
    return this.state === Up;
  }

  isDown() {
    return this.state === Down;
  }
}

export namespace Pen {}

export class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  add(other: Point) {
    return new Point(this.x + other.x, this.y + other.y);
  }

  toString() {
    return `${this.x}×${this.y}`;
  }
}

export interface State {
  pen: Pen;
  angle: Angle;
  position: Point;
}

export function initialStateFactory(): State {
  return {
    pen: Pen.down(),
    angle: new Angle(0),
    position: new Point(0, 0),
  };
}
