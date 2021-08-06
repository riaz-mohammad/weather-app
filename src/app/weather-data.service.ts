import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of, Subject } from 'rxjs';
import { take, tap, catchError } from 'rxjs/operators';
import { Consolidated_weather, Weather_Data, _Location } from './types';


@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private readonly LOCATION_URL = `api/api/location/search/?query=`;
  private readonly LOCATION_WEATHER_DATA_URL = `api/api/location/`;
  private weatherData: ReplaySubject<Weather_Data<Consolidated_weather>> = new ReplaySubject(1);
  private weekDaysWeather: ReplaySubject<Weather_Data<Consolidated_weather[]>> = new ReplaySubject(1);
  
  public weatherData$ = this.weatherData.asObservable();
  public weekDaysWeather$ = this.weekDaysWeather.asObservable();
  public httpPending$: Subject<string> = new Subject();
  

  constructor(private http: HttpClient) { }

  public showNextDayWeather(weather: Weather_Data<Consolidated_weather>): void {
    this.weatherData.next(weather);
  }
    
      
         

  public locationSearch(location: string): Observable<_Location[]> {
    return this.http.get<_Location[]>(this.LOCATION_URL + location)
      .pipe(
        catchError(() => of([]))
      );
  }


  public location(locationId: number): void {
     this.http.get<Weather_Data<Consolidated_weather[]>>(
      this.LOCATION_WEATHER_DATA_URL + locationId + '/').pipe(
        tap(data => (
          this.weatherData.next({ ...data, consolidated_weather: data.consolidated_weather[0] }),
          this.weekDaysWeather.next(data)
        )),
        take(1),
        catchError(_ => of({}))
     ).subscribe(_ => this.httpPending$.next());
  
  }
      
  
          
}
