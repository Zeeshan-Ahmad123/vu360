import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocationService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";

    create(Model:any){
        console.log(Model);

        return this.httpClient.post(this._baseUrl+'Location/create',Model);
    }

    getall(PageSize:any,PageNumber:any){
        let params = new HttpParams().set('PageSize', PageSize).set('PageNumber',PageNumber);
        return this.httpClient.get(this._baseUrl+'Location/getallwithpagination', { params: params });
    }
    GetTotalCount(){
        return this.httpClient.get(this._baseUrl+'Location/gettotalcount');
    }
}