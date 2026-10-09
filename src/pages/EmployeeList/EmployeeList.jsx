import { NavLink } from "react-router";
const EmployeeList = () => {
  return (
    <>
      <div>
        Employee list page
        <NavLink to={`/`}>
          <p>Create employee</p>
        </NavLink>
      </div>
    </>
  );
};

export default EmployeeList;
