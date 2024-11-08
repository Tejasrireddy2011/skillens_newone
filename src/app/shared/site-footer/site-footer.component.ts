import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent {

  contact: any;
  isShow: boolean;
  topPosToStartShowing = 100;
  serverError;
  loading = false;

  openGet() {
    document.getElementById("mySidenav").style.width = "320px";
  }

  closeGet() {
    document.getElementById("mySidenav").style.width = "0";

  }
}
