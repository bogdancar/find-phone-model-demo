import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

 transform(value: any, args: string[]): any {
    const keys = [];
    for (const key in value) {
      keys.push({ key: key, value: value[key] !== null && value[key] !== undefined ? value[key] : '' });
    }
    return keys;
  }
}
