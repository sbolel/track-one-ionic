import { Component } from '@angular/core'

@Component({
  selector: 'navbar',
  template: `
    <ion-header clear>
      <ion-navbar color="light" clear>
        <ion-buttons end>
          <button ion-button icon-only color="primary">
            <ion-icon name="settings"></ion-icon>
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>
  `
})
export class Navbar {
  constructor() {

  }
}
