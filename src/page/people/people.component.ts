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

export class PeopleComponent implements OnInit {

  constructor(private peopleService : PeopleServices) {}

  loading = false
  peoples : any = []

  currentPage = 1;
  totalPages = 1;

  // Fetch popular people from the service
  getPeoples(pageCount: number) {
    this.loading = true;
    this.peopleService.getPopularPeople(pageCount).subscribe({
      next: (data: any) => {
        console.log('Popular People:', data);
        this.peoples = data.results;
        this.currentPage = pageCount;
        this.totalPages = data.total_pages;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching popular people:', error);
        this.loading = false;
      }
    });
  }

  // Initialize the component and fetch the first page of popular people
  ngOnInit() {
    this.getPeoples(1);
  }

  // Pagination methods
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getPeoples(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.getPeoples(this.currentPage - 1);
    }
  }
}
