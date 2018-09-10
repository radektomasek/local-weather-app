import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  styleUrls: ['./current-weather.component.css'],
  templateUrl: './current-weather.component.html',
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Bethesda', 'US')
      .subscribe(data => (this.current = data));
  }
}
