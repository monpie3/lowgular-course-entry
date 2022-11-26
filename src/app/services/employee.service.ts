import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('/assets/data/people.json');
  }

  create(employee:CreateEmployeeModel):Observable<void> {
    return this._httpClient.post('https://jsonplaceholder.typicode.com/posts', employee).pipe(map(_ => void 0));
  }

  delete(id:string):Observable<void> {
    return this._httpClient.delete('https://jsonplaceholder.typicode.com/posts/' + id).pipe(map(_ => void 0));
  }
}
