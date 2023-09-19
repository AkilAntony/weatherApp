import { Component, OnInit } from '@angular/core';
import { GetWeatherDeatailsService } from '../get-weather-deatails.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  defaultPlace: string = 'Nagercoil';
  date: any;
  checkInput!: boolean;
  country!: string;
  temperature!: number;
  seasons!: string;
  day: any
  weatherDetails: any;
  private weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor(private weatherDetailsservice: GetWeatherDeatailsService) { }

  ngOnInit(): void {
    this.getDateAndDay()
    this.weatherDetailsservice.getWeatherDetails(this.defaultPlace).subscribe((details => {
      this.weatherDetails = details;
      this.temperature = Math.round(this.weatherDetails.main.temp);
      this.seasons = this.weatherDetails.weather[0].main;
    }));
  }

  getDateAndDay() {
    this.date = new Date();
    this.day = this.weekday[this.date.getDay()];
  }

  getUserInputs(input: any) {
    if (input !== "") {
      this.weatherDetailsservice.getWeatherDetails(input).subscribe((details => {
        this.weatherDetails = details;
        this.seasons = this.weatherDetails.weather[0].main;
        this.temperature = this.weatherDetails.main.temp;
        this.country = this.weatherDetails.sys.country
        this.checkInput = false;
      }));
    }
    else {
      this.checkInput = true;
    }
  }
}
