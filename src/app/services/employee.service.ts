import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateEmployeeModel} from "../model/create-employee.model";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  // https://dummy.restapiexample.com/

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees',
      ).pipe(
        map((response:ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              personalNumber: employeeResponse.id,
              name: employeeResponse.employee_name,
              email: employeeResponse.employee_name.replace(/\s+/g, '_').toLowerCase() + '@lowgular.io',
              img: employeeResponse.employee_image
            }
          });
      })
    )
  }

  create(employee:CreateEmployeeModel):Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }

  delete(id:string):Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/2' + id).pipe(map(_ => void 0));
  }
}
