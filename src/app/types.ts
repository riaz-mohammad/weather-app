export interface _Location {
  title: string;
  woeid: number;
}


// "id": 5899014554779648,
//       "weather_state_name": "Heavy Cloud",
//       "weather_state_abbr": "hc",
//       "wind_direction_compass": "E",
//       "created": "2021-07-18T07:49:22.151489Z",
//       "applicable_date": "2021-07-18",
//       "min_temp": 20.175,
//       "max_temp": 33.18,
//       "the_temp": 32.34,
//       "wind_speed": 2.877959394024232,
//       "wind_direction": 85.52704908371649,
//       "air_pressure": 1010.5,
//       "humidity": 46,
//       "visibility": 14.803236598266125,
//       "predictability": 71


export interface Consolidated_weather {
  id: number;
  weather_state_name: string;
  the_temp: number;
  max_temp: number;
  min_temp: number;
  humidity: number;
  applicable_date: Date;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  // time: Date;
}
 

export interface Weather_Data<T> {
  consolidated_weather: T;
  title: string;
  timezone: string;
  timezone_name: string;
  time: Date;
  sun_rise: Date;
  sun_set: Date;
  parent: _Location;
}
  