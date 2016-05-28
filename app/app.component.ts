import { Component } from '@angular/core'
import { JsonTextInput } from './jsonTextInput.component'
import { JsonRendered } from './jsonRendered.component'

@Component({
  selector: 'json-nav',
  templateUrl: '../templates/app.html',
  directives: [JsonTextInput, JsonRendered]
})

export class AppComponent { }