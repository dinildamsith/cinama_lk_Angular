import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {PeopleCardComponent} from '../../components/peopleCard/people-card.component';
import {PeopleServices} from '../../services/people.services';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  imports: [
    NgForOf,
    PeopleCardComponent
  ],
  standalone: true
})

export class PeopleComponent{

  constructor(private peopleService : PeopleServices) {}

  loading = false
  peoples : any = []

  getPeoples() {
    this.loading = true;
    this.peopleService.getPopularPeople().subscribe({
      next: (data: any) => {
        console.log('Popular People:', data.results);
        this.peoples = data.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching popular people:', error);
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.getPeoples();
  }

}
