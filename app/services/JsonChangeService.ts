import {Injectable, EventEmitter, Output} from '@angular/core';
@Injectable()

export default class JsonChangeService {
  public jsonObject: Object;
  
  @Output() stateChange: EventEmitter<any> = new EventEmitter<any>();
  
  constructor (){
    this.jsonObject = {};
  }
    
  jsonChange (obj) {
    this.jsonObject = obj
    this.stateChange.emit(this.jsonObject)
  }

  getJsonChangeEmitter () {
    return this.stateChange
  }
}