import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _pageSize: string = '25'
  constructor() { }

  set pageSize(size) {
    this._pageSize = size;
  }
  get pageSize() {
    return this._pageSize
  }
}
