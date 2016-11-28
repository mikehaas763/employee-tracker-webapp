import { Component } from '@angular/core';
import { Employee, EmployeeDao } from './employee';

@Component({
    selector: 'et-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Employee Tracker';
    employees: Array<Employee> = [];

    constructor(employeeDao: EmployeeDao) {
        employeeDao.sendEmployee(new Employee(1, 'Mike Haas', 50000, 3000));
        this.employees = employeeDao.getAll();
    }
}
