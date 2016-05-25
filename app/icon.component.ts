import { Component, Input } from '@angular/core'

@Component({
  selector: 'icon',
  templateUrl: '../templates/icon.html'
})

export default class Icon {
  @Input() name: string;
  icon: string;

  constructor () {
    this.icon = ''
  }
  ngOnInit() {
    switch (this.name) {
      case 'tick':
        this.icon = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
      break
    }
  }
}
