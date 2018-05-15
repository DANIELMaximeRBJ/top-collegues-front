import { Pipe, PipeTransform } from "@angular/core";
import { ValueTransformer } from "@angular/compiler/src/util";

@Pipe({
  name: "score"
})
export class ScorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value < 0)
      return `
      <span class="text-danger"><h4>${value}</h4></span>
    `;
    else
      return `
      <span class="text-primary"><h4> + ${value}</h4></span>
    `;
  }
}
