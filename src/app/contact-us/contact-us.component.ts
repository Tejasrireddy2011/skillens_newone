import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { IContactModel } from './contact-model';
import { HttpService } from '../services/http.service';
import { MetaService } from '../services/meta.service';
import { filter, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactObj = {} as IContactModel;
  spinner = false;

  constructor(private router: Router, private _http: HttpService,
    private metaService: MetaService) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pluck('urlAfterRedirects'),
        tap((data: string) => this.metaService.updateMeta(data))
      ).subscribe();
  }

  submitContact(f: NgForm) {
    this.spinner = true;
    this.contactObj.pageUrl = this.router.url;
    this._http.postEmail(this.contactObj).subscribe({
      next: (data: any) => {
        alert(data.message);
        f.resetForm();
        this.spinner = false;
      },
      error: (reason: any) => {
        alert(reason.message);
        f.resetForm();
      },
      complete: () => console.log("Completed")
    });
  }

}


