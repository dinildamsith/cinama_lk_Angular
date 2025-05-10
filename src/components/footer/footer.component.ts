import { Component } from '@angular/core';

import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {faDiceTwo, faFaceDizzy, faInbox} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    FaIconComponent,
    NgForOf
  ],
  standalone: true
})
export class FooterComponent {
  faFacebook = faFaceDizzy;
  faInstagram = faInbox;
  faTwitter = faDiceTwo;

  navItems = ['Home', 'Movies', 'Trending', 'Add Movie'];
  protected readonly Date = Date;
}
