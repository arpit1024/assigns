import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

export const DetailsEmployee = () => {
  const [salaryRecord, setSalaryRecord] = useState([]);
  const employeeData = JSON.parse(localStorage.getItem("selected_emp_ddd"));
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    let val = randomIntFromInterval(5, 10);
    let arr = [];
    for (let i = 1; i <= val; i++) {
      arr.push((employeeData.salary / val).toFixed(4));
    }
    setSalaryRecord(arr);
  }, []);
  let empSal = employeeData.salary;

  console.log(empSal);
  return (
    <>
      <h1>EMPLOYEE SALARY DETAIL PAGE</h1>
      <table className="tblDetails">
        <tr>
          <th>Employee Name</th>
          <th>Employee Id</th>
          <th>Salary Amount</th>
          <th>Date(YY-MM)</th>
          <th>Department</th>
        </tr>

        {salaryRecord.map((amount, i) => (
          <tr>
            <td key={nanoid()}>
              {employeeData.first_name + " " + employeeData.last_name}
            </td>
            <td key={nanoid()}>{employeeData._id}</td>
            <td key={nanoid()}>{amount}</td>
            <td key={nanoid()}>
              {(() => {
                let [y, m, d] = employeeData.joining_date.split("/");
                return y + "-" + (+m + i);
              })()}
            </td>
            <td key={nanoid()}>{employeeData.department}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>Total Amount</td>
          <td>{employeeData.salary}</td>
        </tr>
      </table>
    </>
  );
};
