import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CountryStateCityService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";

    getallcountries(){
        return this.httpClient.get(this._baseUrl+'LocationType/getallcountries');
    }
    getallstateslist(){
        return this.httpClient.get(this._baseUrl+'LocationType/getallstates');
    }
    getallcitieslist(){
        return this.httpClient.get(this._baseUrl+'LocationType/getallcities');
    }
    getallstates(CountryId:any){
        return this.httpClient.get(this._baseUrl+"LocationType/getallstates/" + CountryId + "");
    }
    getallcities(StateId:any){
        return this.httpClient.get(this._baseUrl+"LocationType/getallcities/" + StateId + "");
    }
}