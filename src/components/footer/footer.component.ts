import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    NgForOf
  ],
  standalone: true
})
export class FooterComponent {

  navItems = ['Movies', 'Tv Shows', 'People'];
  protected readonly Date = Date;
}
