import { NavLink } from "react-router";
import "../../styles/global.css";
import styles from "./createEmployee.module.css";
import { useRef } from "react";
import states from "./utils/states.js";
import { getEmployees } from "./utils/sharedMethod.js";

// test optimisation perfo formData vs autre methode
const CreateEmployee = () => {
  // const [employeesList, setEmployeesList] = useState([]);

  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const dateOfBirth = formData.get("dateOfBirth");
    const startDate = formData.get("startDate");
    const street = formData.get("street");
    const city = formData.get("city");
    const state = formData.get("state");
    const zipCode = formData.get("zipCode");
    const department = formData.get("department");

    const savedEmployees = getEmployees();
    const date = Date.now();
    const newEmployee = {
      id: date,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };

    const updatedEmployees = [...savedEmployees, newEmployee];
    console.log("updated emp", updatedEmployees);

    // setEmployeesList(updatedEmployees);
    // console.log("emp list", employeesList);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    //  sauf si erreur
    modalRef.current.showModal();
    form.reset();
  };

  return (
    <>
      <div>
        {/* //memoizazion */}
        <h1 className="title">HRnet</h1>
      </div>
      <div className="container">
        <NavLink to={`/employee-list`}>
          <p>See employees</p>
        </NavLink>
        <h2>Create Employee</h2>
        <form className="container" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className={styles.label}>
            First Name
          </label>
          <input type="text" name="firstName" />

          <label htmlFor="lastName" className={styles.label}>
            Last Name
          </label>
          <input type="text" name="lastName" />

          <label htmlFor="dateOfBirth" className={styles.label}>
            Date of birth
          </label>
          <input type="date" name="dateOfBirth" />

          <label htmlFor="startDate" className={styles.label}>
            Start Date
          </label>
          <input type="date" name="startDate" />

          <fieldset className={styles.address}>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input name="street" type="text" />

            <label htmlFor="city">City</label>
            <input name="city" type="text" />

            <label htmlFor="state">State</label>
            <select id="state" name="state">
              {states.map((state) => (
                <option key={state.abbreviation}>{state.name}</option>
              ))}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
            <input name="zipCode" type="number" />
          </fieldset>

          <label htmlFor="department" className="styles.label">
            Department
          </label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button type="submit">Save</button>
        </form>

        <dialog ref={modalRef}>
          <p>Employee Created!</p>
          <form method="dialog">
            <button>X</button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default CreateEmployee;
