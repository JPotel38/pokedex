import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typeName'
})
export class TypeNamePipe implements PipeTransform {

  transform(type: string): string {
    return type.split('-')[0]
  }

}
