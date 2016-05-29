import { Component, Output, EventEmitter } from '@angular/core'
import Card from './card.component'
import CardTitle from './cardTitle.component'
import Icon from './icon.component'
import CardDescription from './cardDescription.component'
import JsonChangeService from './services/JsonChangeService'

@Component({
  selector: 'jsonTextInput',
  templateUrl: '../templates/jsonTextInput.html',
  directives: [Card, CardTitle, CardDescription, Icon]
})

export class JsonTextInput {
  json: string = '';

  constructor (private jsonChangeService: JsonChangeService) {
    this.jsonChangeService = jsonChangeService
  }

  removeWhiteSpace (json) {
    return json.replace(/ /g, '').replace(/\n/g, '')
  }

  process () {
    //try {
      var jsonObject = eval('(' + this.removeWhiteSpace(this.json) + ')')
      this.jsonChangeService.jsonChange(jsonObject)
    /*} catch (error) {
      console.log(error)
      alert('The text pasted is not a valid JSON')
    }*/
  }
}
