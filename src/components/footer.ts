import { Component } from '@angular/core'

@Component({
  selector: 'footer',
  template: `
    <ion-footer>
      <button ion-button full>
        mark one &nbsp; <ion-icon name="md-flag"></ion-icon>
      </button>
    </ion-footer>
  `
})
export class Footer {
  constructor() {

  }
}
