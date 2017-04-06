import { Component } from '@angular/core'

@Component({
  selector: 'footer',
  template: `
    <ion-footer class="cta">
      <button ion-button full>
        <span>Track One</span>
        <ion-icon class="cta_icon" name="md-flag"></ion-icon>
      </button>
    </ion-footer>
  `
})
export class Footer {
  constructor() {

  }
}
