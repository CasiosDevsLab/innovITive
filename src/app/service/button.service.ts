import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  call(arg0?: () => void) {
    arg0?.call(this);
  }

}
