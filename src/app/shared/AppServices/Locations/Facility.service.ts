import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacilityModel } from './FacilityModel';


@Injectable({ providedIn: 'root' })
export class FacilityService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";


    GetTotalCount(){
        return this.httpClient.get(this._baseUrl+'Facility/gettotalcount');
    }



    create(Model:any){
        console.log(Model);

        return this.httpClient.post(this._baseUrl+'Facility/create',Model);
    }
    getall(PageSize:any,PageNumber:any){

        let params = new HttpParams().set('PageSize', PageSize).set('PageNumber',PageNumber);

        return this.httpClient.get(this._baseUrl+'Facility/getallwithpagination', { params: params });
    }
    getallfacilities(){
        return this.httpClient.get(this._baseUrl+'Facility/getall');
    }
    getbyid(id){
        return this.httpClient.get(this._baseUrl+"Facility/get/" + id + "");
    }
    edit(id:number,facility : FacilityModel){
        return this.httpClient.put(this._baseUrl+"Facility/edit/" + id + "",facility);
    }

}