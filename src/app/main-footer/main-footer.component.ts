import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {
  public location = '93710';
  public queryString: SafeUrl = '';
  constructor(
    private locationService: LocationService,
    private domSanitizer: DomSanitizer
  ) { }


  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.queryString = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?q=${this.location}&key=AIzaSyAhWg_efRFONuRLsWp1PIBLRGKWerOhksY&zoom=13`);
    this.locationService.location.subscribe((loc) => {
      this.location = loc;
      // tslint:disable-next-line:max-line-length
      this.queryString = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?q=${this.location}&key=AIzaSyAhWg_efRFONuRLsWp1PIBLRGKWerOhksY&zoom=13`);
    });
  }

}
