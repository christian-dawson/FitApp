import { Pipe, PipeTransform } from '@angular/core';
import { UserAccount } from './types/user_account';

@Pipe({
  name: 'traineePipe'
})
export class TraineePipePipe implements PipeTransform {

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
