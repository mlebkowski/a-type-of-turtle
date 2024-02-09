import { boundTurtleScenario } from "./BoundTurtleScenario";
import { Rectangle } from "../Rectangle";
import { Point } from "../../State";

describe("BoundTurtle", () => {
  const boundingBox = new Rectangle({ x: -50, y: -50 }, { x: 50, y: 50 });

  it("moves within the bounding box", () => {
    boundTurtleScenario()
      .givenBoundingBox(boundingBox)
      .whenTurtleMoves(30)
      .thenThePositionIs(new Point(30, 0));
  });

  it("moves cannot move outside the box", () => {
    boundTurtleScenario()
      .givenBoundingBox(boundingBox)
      .whenTurtleMoves(100)
      .thenOutOfBoundsExceptionIsExpected(
        "Moved to 100×0 outside of Rectangle<-50×-50, 50×50>",
      );
  });
});
