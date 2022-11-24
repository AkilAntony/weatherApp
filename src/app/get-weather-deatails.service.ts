import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class GetWeatherDeatailsService {
  userInputs!: string;
  constructor(private httpClient:HttpClient ) { }
  
  getWeatherDetails(place:string){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}
                                  &appid=3ff73dec9393d172118776848898f63c`)
  }
}
