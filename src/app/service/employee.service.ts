import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee : Employee[] = [{id : 99, firstName :'test', lastName:'eiei',gender:'M',department:{code:1,name : 'Mavel'}}];
  constructor() { }
}
