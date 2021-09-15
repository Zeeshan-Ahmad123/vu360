import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PatientCommentsService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";
    create(Model:any){
        return this.httpClient.post(this._baseUrl+'PatientComments/create',Model);
    }
}