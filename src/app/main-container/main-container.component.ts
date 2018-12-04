import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
// export class MainContainerComponent implements OnInit {
//   constructor() { }

//   ngOnInit() {
//   }

// }

export class MainContainerComponent implements OnInit {
  title = 'weather-app';

  weatherData: any;
  weeklyForecast: any;
  location: string;
  city: string;
  defaultLocation = '93710';
  population: any;
  homes: any;
  constructor(private http: Http, private httpClient: HttpClient) {

  }

  async ngOnInit() {
    await this.refresh(this.defaultLocation);
  }

  async refresh(location: string) {
    this.weatherData = await this.getWeatherInfo(location);
    this.weeklyForecast = this.weatherData.query.results.channel.item.forecast;

  }

  async getWeatherInfo(location: string) {
    const endpoint = `https://query.yahooapis.com/v1/public/yql?q=select *
      from weather.forecast where woeid in (select woeid from geo.places(1) where text='${location}')&format=json`;
    const resp = await this.http.get(endpoint).toPromise();
    console.log('respl----->', resp.json());
    this.getApi(location);
    return resp.json();
  }

  async getForecast(location: string) {
    this.refresh(location);
  }

  getApi(zip) {
    const url = 'https://search.onboard-apis.com/communityapi/v2.0.0/area/full?AreaId=ZI' + zip;
    // tslint:disable-next-line:max-line-length
    this.httpClient.get(url, { headers: { 'accept': 'application/json', 'apikey': 'ff142a1d1973fe33d7fcca4474fe4c70' } }).subscribe(data => {
      this.population = data['response'].result.package.item[0].popcy;
      this.homes = data['response'].result.package.item[0].avgsaleprice;
    });
  }

  getHome(zip) {
    const url = 'https://search.onboard-apis.com/communityapi/v2.0.0/area/full?AreaId=ZI' + zip;
    // tslint:disable-next-line:max-line-length
    this.httpClient.get(url, { headers: { 'accept': 'application/json', 'apikey': 'ff142a1d1973fe33d7fcca4474fe4c70' } }).subscribe(data => {
      this.homes = data['response'].result.package.item[0].avgsaleprice;
    });
  }

  deleteText() {
    this.location = '';
  }


}
