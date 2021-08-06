import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap,tap, take, distinctUntilChanged } from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { _Location } from './../types';
import { WeatherDataService } from './../weather-data.service';
import { buttonAnimation, inputAnimation, searchedCity } from '../input-animation';
import { loading } from '../weather-animation';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [inputAnimation, buttonAnimation, searchedCity, loading],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  public search: FormGroup = this.formBuilder.group({
    city: ['', Validators.required],
    woeid: [0, Validators.required],
  });
  public showInput: boolean | undefined;
  public locationSearched!: Observable<_Location[]>;
  public showList!: boolean;
  public buttonTextState: string = 'SEARCH A CITY WEATHER';
  constructor(
    private formBuilder: FormBuilder,
    public weatherDataService: WeatherDataService
  ) {}

  ngOnInit(): void {
    this.locationSearched = this.city.valueChanges.pipe(
      tap(_ => this.showList = true ),
      switchMap(city => this.weatherDataService.locationSearch(city).pipe(
                  tap(data =>
                    data.forEach(weather =>
                      weather.title.toLowerCase() === this.city.value.toLowerCase()
                        ? this.woeid.setValue(weather.woeid)
                        : null
                    )
                  )
      )),
    );
  }

  public locationWeather(location: _Location): void {
    this.city.setValue(location.title);
    this.weatherDataService.location(location.woeid);
    this.showList = false;
    this.weatherDataService.httpPending$.next('Loading...');
  }

  public onSubmit(): void {
    if (this.search.invalid) {
      this.showInput = true;
      this.buttonTextState = 'SEARCH';
      return;
    }

    this.weatherDataService.location(this.woeid.value);
    this.showList = false;
    this.weatherDataService.httpPending$.next('Loading...');
  }

  public get city(): FormControl {
    return this.search.get('city') as FormControl;
  }

  public get woeid(): FormControl {
    return this.search.get('woeid') as FormControl;
  }
}
