import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDocument',
})
export class FormatDocumentPipe implements PipeTransform {
  transform(document: string): string {
    if (!document) {
      return 'N/P';
    }

    return document.length === 11
      ? (document = document.replace(/(\d{3})(\d{7})(\d{1})/, '$1-$2-$3'))
      : document.toUpperCase();
  }
}
