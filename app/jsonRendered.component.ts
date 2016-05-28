import { Component, Input } from '@angular/core'
import Card from './card.component'
import CardTitle from './cardTitle.component'
import { JsonTextInput } from './jsonTextInput.component'
import JsonChangeService from './services/JsonChangeService'

@Component({
  selector: 'jsonRendered',
  templateUrl: '../templates/jsonrendered.html',
  directives: [Card, CardTitle]
})

export class JsonRendered {
  private jsonObject: Object

  constructor (private jsonChangeService: JsonChangeService) {
    this.jsonChangeService = jsonChangeService
    this.jsonObject = jsonChangeService.jsonObject
    this.jsonChangeService.stateChange.subscribe(json => this.renderJson(json) )
  }

  renderJson (jsonObject) {
    console.log(jsonObject)
  }
}
