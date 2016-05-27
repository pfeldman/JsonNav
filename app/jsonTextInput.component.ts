import { Component, Input } from '@angular/core'
import Card from './card.component'
import CardTitle from './cardTitle.component'
import Icon from './icon.component'
import CardDescription from './cardDescription.component'

@Component({
  selector: 'jsonTextInput',
  templateUrl: '../templates/jsonTextInput.html',
  directives: [Card, CardTitle, CardDescription, Icon]
})

export class JsonTextInput {
  json: string = '';

  removeWhiteSpace (json) {
    return json.replace(/ /g, '').replace(/\n/g, '')
  }

  process () {
    try {
      var jsonObject = eval('(' + this.removeWhiteSpace(this.json) + ')')
      console.log(jsonObject)
    } catch (error) {
      alert('The text pasted is not a valid JSON')
    }
  }
}
