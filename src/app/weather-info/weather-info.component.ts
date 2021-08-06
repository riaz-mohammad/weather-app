
import { Observable } from 'rxjs';
import { WeatherDataService } from './../weather-data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Consolidated_weather, Weather_Data } from '../types';


@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherInfoComponent implements OnInit {
  public weatherData$!: Observable<Weather_Data<Consolidated_weather>>;
  public imagePath = '../../assets/';
  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherData$ = this.weatherDataService.weatherData$;
  

  }
}
