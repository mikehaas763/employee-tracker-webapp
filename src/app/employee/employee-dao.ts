import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeDao {
    private employees: Array<Employee> = [];

    getAll(): Array<Employee> {
        return this.employees;
    }

    sendEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
}
