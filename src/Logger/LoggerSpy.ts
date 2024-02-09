import { Logger } from "./Logger";

export class LoggerSpy implements Logger {
  public messages: string[] = [];

  log(message: string): void {
    this.messages.push(message);
  }
}
