import { loggerTurtleScenario } from "./LoggerTurtleScenario";

describe("LoggerTurtle", () => {
  it("turns left", () => {
    loggerTurtleScenario()
      .whenTurtleTurnsLeft(90)
      .thenMessageIsLogged("[0×0] Turn left by 90 degrees")
      .andTurtleReceivedInstruction("turnLeft(90)");
  });

  it("turns right", () => {
    loggerTurtleScenario()
      .whenTurtleTurnsRight(60)
      .thenMessageIsLogged("[0×0] Turn right by 60 degrees")
      .andTurtleReceivedInstruction("turnRight(60)");
  });

  it("moves forward", () => {
    loggerTurtleScenario()
      .whenTurtleMovesForward(10)
      .thenMessageIsLogged(
        "[0×0] Move forward by 10 units at an angle 0 degrees",
      )
      .andTurtleReceivedInstruction("moveForward(10)");
  });
});
