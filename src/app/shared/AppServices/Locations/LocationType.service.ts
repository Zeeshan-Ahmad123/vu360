import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationType } from './LocationTypeModel';


@Injectable({ providedIn: 'root' })
export class LocationTypeService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";

    create(Model:any){
        console.log(Model);
        return this.httpClient.post(this._baseUrl+'LocationType/create',Model);
    }
    getbyid(id){
        return this.httpClient.get(this._baseUrl+"LocationType/get/" + id + "");
    }
    edit(id:number,locationtype : LocationType){
        return this.httpClient.put(this._baseUrl+"LocationType/edit/" + id + "",locationtype);
    }
    getall(PageSize:any,PageNumber:any){

        let params = new HttpParams().set('PageSize', PageSize).set('PageNumber',PageNumber);

        return this.httpClient.get(this._baseUrl+'LocationType/getallwithpagination', { params: params });
    }
    getalllocationtypes(){
        return this.httpClient.get(this._baseUrl+'LocationType/getalllocationtypes');
    }
    GetTotalCount(){
        return this.httpClient.get(this._baseUrl+'LocationType/gettotalcount');
    }
    getallfacilities(){
        return this.httpClient.get(this._baseUrl+'LocationType/getallfacilities');
    }
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