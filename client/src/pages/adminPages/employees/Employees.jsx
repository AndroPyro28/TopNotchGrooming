import React from "react";
import { useState, useEffect } from "react";
import Employee from "../../../components/employees/Employee";
import { EmployeesContainer, EmployeeList, Header } from "./components";
import CustomAxios from "../../../customer hooks/CustomAxios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Employees() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await CustomAxios({
          METHOD: "GET",
          uri: "/api/public/getEmployeeOfTheMonth",
        });
        setEmployeeList(res.data);
      } catch (error) {
        console.error("error here", error.message);
      }
    })();
  }, []);

  if (!Boolean(currentUser?.super)) {
    return navigate(-1);
  }

  return (
    <EmployeesContainer>
      <h1>Employee List</h1>
      {/* <Header>
            <th>photo</th>
            <th>name</th>
            <th>email</th>
        </Header> */}
      <EmployeeList>
        {employeeList.length > 0 &&
          employeeList?.map((employee) => <Employee data={employee} />)}
      </EmployeeList>
    </EmployeesContainer>
  );
}

export default Employees;
