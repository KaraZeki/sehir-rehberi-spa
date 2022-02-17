import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private httpClient: HttpClient) {}

  path = 'https://localhost:44364/api/';

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + 'Cities');
  }

  getCityById(cityId:number):Observable<City>{
    return this.httpClient.get<City>(this.path+"Cities/GetCity"+cityId)
  }

  getPhotosByCityId(cityId:number):Observable<Photo[]>{
    var res= this.httpClient.get<Photo[]>(this.path+"Cities/photos/?cityId="+cityId)
    return res;
  }

  add(city:City){
    this.httpClient.post(this.path+'Cities/add',city).subscribe();
  }
}
