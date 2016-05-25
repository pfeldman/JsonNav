import { Component, Input } from '@angular/core'
import { JsonTextInput } from './jsonTextInput.component'

@Component({
  selector: 'cardtitle',
  templateUrl: '../templates/cardtitle.html',
})

export default class CardTitle { 
  @Input() title: string;
}