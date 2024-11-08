import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, pluck, tap } from 'rxjs/operators';
import { IContactModel } from 'src/app/contact-us/contact-model';
import { HttpService } from 'src/app/services/http.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {

  contactObj = {} as IContactModel;
  spinner = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    private _http: HttpService
  ) {
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
