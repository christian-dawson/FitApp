import { Pipe, PipeTransform } from '@angular/core';
import { UserAccount } from './types/user_account';

@Pipe({
  name: 'trainerPipe'
})
export class TrainerPipePipe implements PipeTransform {

  transform(items: UserAccount[], searchText: string): UserAccount[] {
    if (!items) {return []; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        if (it.lastName.toLowerCase().includes(searchText)) {
          return true;
        }
    });
  }

}
