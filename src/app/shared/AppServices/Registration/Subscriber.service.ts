import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class SubscriberService {
    constructor(private httpClient: HttpClient){}
    _baseUrl="https://localhost:44333/api/";

    GetTotalCount(){
        return this.httpClient.get(this._baseUrl+'Subscriber/gettotalcount');
    }
    getall(PageSize:any,PageNumber:any){

        let params = new HttpParams().set('PageSize', PageSize).set('PageNumber',PageNumber);

        return this.httpClient.get(this._baseUrl+'Subscriber/getallwithpagination', { params: params });
    }
    
    create(Model:any){
        console.log(Model);
        return this.httpClient.post(this._baseUrl+'Subscriber/create',Model);
    }

    getAllSubscriberInformation(){  
        return this.httpClient.get(this._baseUrl+'Subscriber/getAll');
        
    }

    getallcountries(){
        return this.httpClient.get(this._baseUrl+'Subscriber/getallcountries');
    }
    getallstateslist(){
        return this.httpClient.get(this._baseUrl+'Subscriber/getallstates');
    }
    getallcitieslist(){
        return this.httpClient.get(this._baseUrl+'Subscriber/getallcities');
    }
    getallstates(CountryId:any){
        return this.httpClient.get(this._baseUrl+"Subscriber/getallstates/" + CountryId + "");
    }
    getallcities(StateId:any){
        return this.httpClient.get(this._baseUrl+"Subscriber/getallcities/" + StateId + "");
    }

    getallgender(){
        return this.httpClient.get(this._baseUrl+'Subscriber/getallgender');
    }

    getallTitle(){
        return this.httpClient.get(this._baseUrl+'Subscriber/getalltitle');
    }
    getallCarrier(){
        return this.httpClient.get(this._baseUrl+'Subscriber/getCarrier');
    }

    searchSubscribers(LastName:any,InsuredIdno:any) 
     {  
        let params = new HttpParams().set('LastName', LastName).set('InsuredIdno',InsuredIdno);

        return this.httpClient.get(this._baseUrl+ 'Subscriber/getsubscriberInformation',{params:params});
    }

    relationWithSubscriber(){  
        return this.httpClient.get(this._baseUrl+'Subscriber/relationWithSubscriber');
        
    }

    getbyid(id:any){
        return this.httpClient.get(this._baseUrl+"Subscriber/get/" + id + "");
    }
    edit(id:number,Model :any ){
        return this.httpClient.put(this._baseUrl+"Subscriber/edit/" + id + "",Model);
        console.log(Model);
    }

}