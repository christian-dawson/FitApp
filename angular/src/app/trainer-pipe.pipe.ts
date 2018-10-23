import { Pipe, PipeTransform } from '@angular/core';
import { UserAccount } from './types/user_account';
import { Trainer } from './types/Trainer';

@Pipe({
  name: 'trainerPipe'
})
export class TrainerPipePipe implements PipeTransform {

  transform(items: Trainer[], searchText: string): Trainer[] {
    if (!items) {return []; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        if (it.lastName.toLowerCase().includes(searchText)) {
          return true;
        }
    });
  }

}
