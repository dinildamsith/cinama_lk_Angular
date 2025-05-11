import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieCardComponent} from '../../components/movieCard/movie-card.component';
import {PeopleCardComponent} from '../../components/peopleCard/people-card.component';

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


  peoples = [
    {
      image: 'https://images.ntpl.org.uk/hppa-zooms/00000000696/cms_pcf_959529.bro',
      name: 'John Doe',
      title: 'Actor',
      id: 1
    },
    {
      image: 'https://images.ntpl.org.uk/hppa-zooms/00000000696/cms_pcf_959529.bro',
      name: 'Jane Smith',
      title: 'Director',
      id: 2
    },
    {
      image: 'https://images.ntpl.org.uk/hppa-zooms/00000000696/cms_pcf_959529.bro',
      name: 'Alice Johnson',
      title: 'Producer',
      id: 3
    }
  ]

}
