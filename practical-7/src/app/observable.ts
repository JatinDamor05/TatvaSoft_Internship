import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  counter$: Observable<number> = interval(1000);

}