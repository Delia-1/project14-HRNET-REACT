import { NavLink } from "react-router";
const CreateEmployee = () => {
  return (
    <>
      <div>create employee page</div>
      <NavLink to={`/employee-list`}>
        <p>See all employees</p>
      </NavLink>
    </>
  );
};

export default CreateEmployee;
