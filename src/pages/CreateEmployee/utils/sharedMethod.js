export const getEmployees = () => {
  return JSON.parse(localStorage.getItem("employees")) || [];
};
