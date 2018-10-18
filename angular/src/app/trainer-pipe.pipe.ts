import { Pipe, PipeTransform } from '@angular/core';
import { User } from './types/user';

@Pipe({
  name: 'trainerPipe'
})
export class TrainerPipePipe implements PipeTransform {

  transform(items: User[], searchText: string): User[] {
    if (!items) {return []; }
    if (!searchText) {
      return items.filter(user => {
        if (user.type === 'trainer') {return true; }
      });
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.type === 'trainer') {
        if (it.lastName.toLowerCase().includes(searchText)) {
          return true;
        }
      }
    });
  }

}
