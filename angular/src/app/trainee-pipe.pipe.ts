import { Pipe, PipeTransform } from '@angular/core';
import { UserAccount } from './types/user_account';
import { Trainee } from './types/trainee';

@Pipe({
  name: 'traineePipe'
})
export class TraineePipePipe implements PipeTransform {

  transform(items: Trainee[], searchText: string): Trainee[] {
    if (!items) {return []; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        if (it.lastName.toLowerCase().includes(searchText)) {
          return true;
      }
    });
  }

}
