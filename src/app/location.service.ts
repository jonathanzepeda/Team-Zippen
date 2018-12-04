import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public location: Subject<string> = new Subject<string>();
  constructor() { }

  setLocation(location: string) {
    this.location.next(location);
  }
}
