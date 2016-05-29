import { Component, Input } from '@angular/core'
import { NumberComponent } from './number.component'
import { StringComponent } from './string.component'
import { BooleanComponent } from './boolean.component'
import { NgClass } from '@angular/common'

@Component({
  selector: 'object',
  templateUrl: '../../templates/jsonRenderComponents/object.html',
  directives: [NumberComponent, StringComponent, ObjectComponent, BooleanComponent]
})

export class ObjectComponent {
  @Input() value: Object
  @Input() keys: Array<String>

  isObject (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'object'
      || ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'array'
  }

  isArray (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'array'
  }

  getKeys (obj) {
    let value
    if (this.isObject(obj)) {
      value = Object.keys(obj)
    }

    return value
  } 
}