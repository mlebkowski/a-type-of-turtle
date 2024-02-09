import { Point } from "../State";
import { Rectangle } from "./Rectangle";

export class BoundingBoxAssertion {
  public static assertWithinBoundingBox(
    position: Point,
    boundingBox: Rectangle,
  ): void {
    if (false === boundingBox.contains(position)) {
      throw new Error(`Moved to ${position} outside of ${boundingBox}`);
    }
  }
}
