import { Observable } from 'rxjs';
import { WeatherDataService } from './../weather-data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Consolidated_weather } from './../types';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailComponent implements OnInit {
  public weatherDetail$!: Observable<Consolidated_weather>
  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
      this.weatherDetail$ = this.weatherDataService.weatherData$.pipe(
        map(data => data.consolidated_weather)  
      )          
  }

}
