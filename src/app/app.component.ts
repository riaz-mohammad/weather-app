
import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public weatherData$ = this.weatherDataService.weatherData$;
  constructor(private weatherDataService: WeatherDataService) {}
}
