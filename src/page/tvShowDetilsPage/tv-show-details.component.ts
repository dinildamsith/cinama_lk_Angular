import {Component, OnInit} from '@angular/core';
import {TvShowsService} from '../../services/tv-shows.service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
})

export class TvShowDetailsComponent implements OnInit{

  loading: boolean = false;
  tvSeriesDetails: any = {}

  constructor(private tvShowsService : TvShowsService, private route: ActivatedRoute) {}

  //---------------selected tv show details get----------------
  getTvShowDetails(id: number) {
    this.loading = true;
    this.tvShowsService.getTvShowDetails(id).subscribe((response) => {
      this.tvSeriesDetails = response;
      console.log(this.tvSeriesDetails);
      this.loading = false;
    }, (error) => {
      console.error('Error fetching TV show details:', error);
      this.loading = false;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('tvShowId');

    // Check if the id is not null or undefined
    if (id) {
      this.getTvShowDetails(+id);
    } else {
      console.error('No TV show ID found in the route.');
    }
  }

}
