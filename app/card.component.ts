import { Component, Input } from '@angular/core'

@Component({
  selector: 'card',
  templateUrl: '../templates/card.html'
})

export default class Card {
  @Input() description: any;
}
