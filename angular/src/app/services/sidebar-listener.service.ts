import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarListenerService {

  private static nameEmitter = new Subject<String>();

  public static emitEvent(name: String) {
    this.nameEmitter.next(name);
  }
  public static getObservable(): Observable<String> {
    return this.nameEmitter.asObservable();
  }

  constructor() { }
}
