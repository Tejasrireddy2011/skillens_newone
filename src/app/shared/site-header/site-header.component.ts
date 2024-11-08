import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {
  location: any;
  logo: any;

  @ViewChild('btntoggle', { static: false }) myDiv: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className.indexOf('nav') == -1 && this.myDiv.nativeElement.getAttribute('aria-expanded') == 'true') {
      let el1: HTMLElement = this.myDiv.nativeElement;
      el1.click();
    }
  }

  constructor(
    private router: Router,
    location: Location
  ) { }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.location = this.router.url;
          if (this.location === '/digital-marketing') {
            this.logo = 'SkillLens_Logo2.webp';
          } else {
            this.logo = 'SkillLens_Logo2.webp';
          }
        }
      });
  }

 
}
