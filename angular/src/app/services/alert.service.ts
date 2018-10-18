import { Injectable } from '@angular/core';
import { Alert } from '../types/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
public static ourCustomAlert: Alert = new Alert('hello', 'success', false);

public static setAlert(newAlert: Alert) {
  this.ourCustomAlert = newAlert;
}

public static getAlert() {
  return this.ourCustomAlert;
}

  constructor() { }
}
