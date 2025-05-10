import { Component } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    FaIconComponent,
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class NavbarComponent {

  navItems = [
    { name: 'Movies', path: '/' },
    { name: 'Tv Shows', path: '/tv-shows' },
    { name: 'People', path: '/people' }
  ]

  isMenuOpen = false;
  darkMode = false;

  faSun = faSun;
  faMoon = faMoon;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {
    // Check localStorage for dark mode preference
    const darkModePreference = localStorage.getItem('darkMode');
    this.darkMode = darkModePreference === 'true';
    document.documentElement.classList.toggle('dark', this.darkMode);
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
  }

  protected readonly faUser = faUser;
}
