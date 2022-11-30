import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map, Observable} from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeDetailsParamsModel} from "../../model/employee-details-params.model";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params.pipe(
    map((response): EmployeeDetailsParamsModel => ({
          id: response["id"],
          name: response["name"]
        })
    )
  )

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }
}
