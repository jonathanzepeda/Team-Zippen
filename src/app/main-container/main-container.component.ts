import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  defaultLocation = 'Fresno';
  constructor(private http: Http) {

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
    return resp.json();
  }

  async getForecast(location: string) {
    this.refresh(location);
  }
}
