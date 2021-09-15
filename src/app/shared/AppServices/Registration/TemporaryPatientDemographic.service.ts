import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class TemporaryPatientDemographicService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";

    create(Model:any) {
        console.log(Model);
        return this.httpClient.post(this._baseUrl+'TemporaryPatientDemographic/create',Model);
    }
    getRelationships(){
        return this.httpClient.get(this._baseUrl+'TemporaryPatientDemographic/getRelationships');
    }
    

}