import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { IContactModel } from '../contact-us/contact-model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MetaService } from '../services/meta.service';
import { filter, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  //Form Validables 
  registerForm: any = FormGroup;
  submitted = false;
  isModelOpen = true;

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      alert("Great!!");
    }

  }



  contactObj = {} as IContactModel;
  agreeStatus = true;
  spinner = false;

  constructor(
    private _http: HttpService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pluck('urlAfterRedirects'),
        tap((data: string) => this.metaService.updateMeta(data))
      ).subscribe();

    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // document.getElementById("myModal").style.display = "block";
    // document.getElementById("myModal").classList.add("show");

  }

  submitContact(f: NgForm) {
    console.log("OK");
    this.spinner = true;
    this.contactObj.pageUrl = this._router.url;
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

  closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").classList.remove("show");
  }

  gotoCart() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").classList.remove("show");
    this._router.navigate(['/cart']);
  }

}