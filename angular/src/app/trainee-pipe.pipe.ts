import { Pipe, PipeTransform } from '@angular/core';
import { User } from './types/user';

@Pipe({
  name: 'traineePipe'
})
export class TraineePipePipe implements PipeTransform {

  transform(items: User[], searchText: string): User[] {
    if (!items) {return []; }
    if (!searchText) {
      return items.filter(user => {
        if (user.type === 'trainee') {return true; }
      });
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.type === 'trainee') {
        if (it.lastName.toLowerCase().includes(searchText)) {
          return true;
        }
      }
    });
  }

}
