import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, pluck, tap } from 'rxjs/operators';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-career-journey',
  templateUrl: './career-journey.component.html',
  styleUrls: ['./career-journey.component.scss']
})
export class CareerJourneyComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService
  ) {
  }
  starRating = 5;

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pluck('urlAfterRedirects'),
        tap((data: string) => this.metaService.updateMeta(data))
      ).subscribe();
  }
}
