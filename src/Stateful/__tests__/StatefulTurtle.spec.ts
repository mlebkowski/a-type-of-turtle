import { statefulTurtleScenario } from "./StatefulTurtleScenario";
import { Angle, Point } from "../../State";

describe("StatefulTurtle", () => {
  test("it turns", () => {
    statefulTurtleScenario()
      .whenTurtleTurnsLeft(90)
      .thenTheAngleIs(new Angle(270));
  });

  test("it moves", () => {
    statefulTurtleScenario()
      .whenTurtleTurnsLeft(90)
      .andMovesForward(100)
      .thenThePositionIs(new Point(0, 100));
  });
});
