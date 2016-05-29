import { Component, Input } from '@angular/core'

@Component({
  selector: 'string',
  templateUrl: '../../templates/jsonRenderComponents/string.html'
})

export class StringComponent {
  @Input() value: any

  isString (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'string'
  }
}