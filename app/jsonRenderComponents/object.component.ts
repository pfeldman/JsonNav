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
  closed: Array<number> = []

  toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  } 

  isObject (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'object'
      || ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'array'
  }

  isArray (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === 'array'
  }

  toggleExapand (index) {
    if (this.isOpened(index)) {
      this.closed.push(index)
    } else {
      this.closed.splice(this.closed.indexOf(index), 1)
    }
  }

  getSymbol (index) {
    if (this.isOpened(index)) {
      return '-'
    } else {
      return '+'
    }
  }

  isOpened (index) {
    let value = true
    if (this.closed !== undefined) {
      value = (this.closed.indexOf(index) === -1)
    }
    return value
  } 

  getKeys (obj) {
    let value
    if (this.isObject(obj)) {
      value = Object.keys(obj)
    }
    return value
  } 
}