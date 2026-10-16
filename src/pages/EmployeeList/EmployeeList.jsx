// import createEmployee from "./createEmployee.module.css";
import { NavLink } from "react-router";
import "../../styles/global.css";
import styles from "./employeeList.module.css";
import { getEmployees } from "../CreateEmployee/utils/sharedMethod";
const EmployeeList = () => {
  const employees = getEmployees();

  const noData = employees.length === 0;
  return (
    <>
      <div>
        <h1 className="title">Current Employees</h1>
      </div>
      <div className="container">
        <NavLink to={`/`}>
          <p>Create employee</p>
        </NavLink>
      </div>
      <div className="container">
        {noData && <p>No data available in table</p>}
        {employees.map((employee) => (
          <div key={employee.id} className={styles.employeeData}>
            <span>{employee.firstName} - </span>
            <span>{employee.lastName} - </span>
            <span>{employee.startDate} - </span>
            <span>{employee.department} - </span>
            <span>{employee.dateOfBirth} - </span>
            <span>{employee.street} - </span>
            <span>{employee.city} - </span>
            <span>{employee.state} - </span>
            <span>{employee.zipCode}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
