import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  constructor(private http:HttpClient) { }

  public getAllEquipements():Observable<any>{
   return this.http.get(`${environment.API_URI}/eqipements`) as Observable<any>;

  }

  public sendEquipement(equipement:any):Observable<any>{
    return  this.http.post('http://localhost:3000/eqipements',equipement) as Observable<any>
  }
}
