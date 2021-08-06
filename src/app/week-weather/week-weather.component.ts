import { Weather_Data } from './../types';
import { Observable } from 'rxjs';
import { WeatherDataService } from './../weather-data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Consolidated_weather } from '../types';
import { daysWeather } from '../weather-animation';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.scss'],
  animations: [daysWeather],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekWeatherComponent implements OnInit {
  weekWeather$!: Observable<Weather_Data<Consolidated_weather[]>>;
  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.weekWeather$ = this.weatherDataService.weekDaysWeather$;
  }

  public weekDayWeather(
    weather: Consolidated_weather,
    weatherData: Weather_Data<Consolidated_weather[]>
  ): void {
    this.weatherDataService.showNextDayWeather({
      ...weatherData,
      consolidated_weather: weather,
    });
  }
}
