import { Component } from '@angular/core'
import { JsonTextInput } from './jsonTextInput.component'

@Component({
  selector: 'json-nav',
  templateUrl: '../templates/app.html',
  directives: [JsonTextInput]
})

export class AppComponent { }