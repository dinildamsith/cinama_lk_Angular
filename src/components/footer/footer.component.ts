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

  navItems = ['Home', 'Movies', 'Trending', 'Add Movie'];
  protected readonly Date = Date;
}
