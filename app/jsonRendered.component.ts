import { Component, Input } from '@angular/core'
import Card from './card.component'
import CardTitle from './cardTitle.component'
import { JsonTextInput } from './jsonTextInput.component'
import { ObjectComponent } from './jsonRenderComponents/object.component'
import JsonChangeService from './services/JsonChangeService'

@Component({
  selector: 'jsonRendered',
  templateUrl: '../templates/jsonrendered.html',
  directives: [Card, CardTitle, ObjectComponent]
})

export class JsonRendered {
  private jsonObject: Object
  private jsonKeys: Array<String>
  constructor (private jsonChangeService: JsonChangeService) {
    this.jsonChangeService = jsonChangeService
    this.jsonChangeService.stateChange.subscribe(json => this.renderJson(json) )
  }

  renderJson (jsonObject) {
    this.jsonKeys = Object.keys(jsonObject)
    this.jsonObject = jsonObject
  }
}
