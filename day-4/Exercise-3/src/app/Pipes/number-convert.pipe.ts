import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberConvert'
})
export class NumberConvertPipe implements PipeTransform {

  transform(value: number): string {
    const binary = value.toString(2);
    const hexadecimal = value.toString(16).toUpperCase();
    const octal = value.toString(8);
    return `Binary: ${binary}, Hexadecimal: ${hexadecimal}, Octal: ${octal}`;
  }
}
