import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../components/nav/navbar.component';
import {FooterComponent} from '../components/footer/footer.component';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cinamalk';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50); // small delay to ensure DOM is ready
      });
  }

}
