import { Pipe, PipeTransform } from "@angular/core";
import { Collegue } from "../model";

@Pipe({
  name: "filtrerCollegue"
})
export class FiltrerColleguePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value == null || value == [] || args == null) {
      return value;
    }
    return value.filter((col: Collegue) => col.pseudo.includes(args));
  }
}
