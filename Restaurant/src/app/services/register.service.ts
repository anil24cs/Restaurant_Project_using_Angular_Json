import { Register } from './../models/register';            
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {

  constructor(private _http: HttpClient) { }

  getWelcomeMessage(): string {
    return "Manage Registration";
  }

  getDepartments(): Observable<Register[]> {
    return this._http.get<Register[]>(`http://localhost:3000/users`);
  }

  getDepartmentById(id: number): Observable<Register> {
    return this._http.get<Register>(`http://localhost:3000/users/${id}`);
  }

  addDepartment(register: Register): Observable<Register> {
    return this._http.post<Register>(`http://localhost:3000/users`, register);
  }

  updateDepartment(id: number, register: Register): Observable<Register> {
    return this._http.put<Register>(`http://localhost:3000/users/${id}`, register)
  }

  deleteDepartment(id: number): Observable<Register> {
    return this._http.delete<Register>(`http://localhost:3000/users/${id}`);
  }
}
