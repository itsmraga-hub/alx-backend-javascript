export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberofDepartments() {
      return employeesList.length;
    },
  };
}
