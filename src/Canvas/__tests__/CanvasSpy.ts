import { Canvas, Line } from "../Canvas";

export class CanvasSpy implements Canvas {
  public lines: Line[] = [];

  draw(line: Line): void {
    this.lines.push(line);
  }
}
