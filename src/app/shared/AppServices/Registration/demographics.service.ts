import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class DemographicsService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";
    create(Model:any){
        return this.httpClient.post(this._baseUrl+'Demographics/create',Model);
    }
    getalldemographicsdropdowns(){
        return this.httpClient.get(this._baseUrl+'Demographics/getalldemographicsdropdowns');
    }
    getbymrno(MrNo){
        return this.httpClient.get(this._baseUrl+"Demographics/getbymrno/" + MrNo + "");
    }
    getallpromotionalmediaitems(MediaChannelId){
        return this.httpClient.get(this._baseUrl+"Demographics/getallpromotionalmediaitems/" + MediaChannelId + "");
    }
    
}