import { IRecipe } from "./interfaces/IRecipe";
import { Step } from "./step";

export class Recipe implements IRecipe {
  constructor(public name: string, public yearOfPublication: number, public steps: Step[]) {}

  searchName(name: string): string {
    if (this.name !== name) {
      throw new Error(`La receta '${name}' no existe.`);
    }
    return this.name;
  }

  getSteps(name: string): Step[] {
    if (this.name !== name) {
      throw new Error(`La receta '${name}' no existe.`);
    }
    return this.steps;
  }

  totalTime(): { max: number; min: number } {
    const steps: Step[] = this.getSteps(this.name);
    let totalTimemax: number = 0;
    let totalTimemin: number = 0;
    for (let i = 0; i < steps.length; i++) {
      totalTimemax += steps[i].getTime();
      if (!steps[i].isOptional()) {
        totalTimemin += steps[i].getTime();
      }
    }
    return { max: totalTimemax, min: totalTimemin };
  }
}