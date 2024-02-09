import { canvasTurtleScenario } from "./CanvasTurtleScenario";

describe("CanvasTurtle", () => {
  it("draws", () => {
    canvasTurtleScenario()
      .whenOddSidesOfRectangleAreDrawn(100)
      .thenCanvasLinesAreExpected("0×0 → 100×0", "100×100 → 0×100");
  });
});
