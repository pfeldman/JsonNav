import { Component, Input } from '@angular/core'

@Component({
  selector: 'boolean',
  templateUrl: '../../templates/jsonRenderComponents/boolean.html'
})

export class BooleanComponent {
  @Input() value: any

  isBoolean (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'boolean'
  }
}