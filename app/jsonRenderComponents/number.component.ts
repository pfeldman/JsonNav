import { Component, Input } from '@angular/core'

@Component({
  selector: 'number',
  templateUrl: '../../templates/jsonRenderComponents/number.html'
})

export class NumberComponent {
  @Input() value: any

  isNumber (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'number'
  }
}