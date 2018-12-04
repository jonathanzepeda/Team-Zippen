import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ToastService } from './toast/toast.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  weatherData: any;
  weeklyForecast: any;
  location: string;
  defaultLocation = 'Fresno';
  toastTypes: Array<string> = [];
  constructor(private http: Http, private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
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

  showToast() {
    const rand = Math.floor(Math.random() * 4);
    console.log('My random number is: ' + rand);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'Hi This is a message, my random number is: ' + rand;
    const duration = 4000;
    this.toastService.showToast(toastType, toastMessage, duration);
  }


}


export class ToastComponent {
  title = 'toast';
  toastTypes: Array<string> = [];
  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
  }

  // success, info, warning, danger

  showToast() {
    const rand = Math.floor(Math.random() * 4);
    console.log('My random number is: ' + rand);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'Hi This is a message, my random number is: ' + rand;
    const duration = 4000;
    this.toastService.showToast(toastType, toastMessage, duration);
  }
}
