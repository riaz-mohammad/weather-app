
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { weatherAnimation } from 'src/app/weather-animation';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [weatherAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {}
