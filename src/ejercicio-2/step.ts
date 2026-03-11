import { IStep } from "./interfaces/IStep";

export class Step implements IStep {
  constructor(public description: string, public duration: number, public tags: string[], public optional_step: boolean, public complete_times: number) {}

  getTime(): number {
    return this.duration;
  }

  isOptional(): boolean {
    return this.optional_step;
  }
}