import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./home.css";
export const Employees = () => {
  const [records, setRecords] = useState([]);
  const [text, setText] = useState("");
  const [date, setDates] = useState({});
  const [filter, setFilter] = useState({
    date: false,
    gender: false,
    department: false,
  });

  const navigate = useNavigate();
  const { page } = useParams();

  const fetchRecords = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setRecords(res.employees));
  };
  //https://employeesdataforapp.herokuapp.com/getEmployees
  useEffect(() => {
    fetchRecords(
      `https://employeesdataforapp.herokuapp.com/getEmployees?page=${page}&size=10`
    );
  }, []);
  const handlePageBtns = (p) => {
    if (filter.date) {
      console.log(filter.date.sD, filter.date.eD);
      fetchRecords(
        `https://employeesdataforapp.herokuapp.com/filterByDate?startdate=${filter.date.sD}&enddate=${filter.date.eD}?page=${p}&size=10`
      );
    } else if (filter.department) {
      fetchRecords(
        `https://employeesdataforapp.herokuapp.com/fiterByDepartment/${filter.department}?page=${p}&size=10`
      );
    } else if (filter.gender) {
      fetchRecords(
        `https://employeesdataforapp.herokuapp.com/fiterByGender/${filter.gender}?page=${p}&size=10`
      );
    } else {
      fetchRecords(
        `https://employeesdataforapp.herokuapp.com/getEmployees?page=${p}&size=10`
      );
    }
    return navigate(`/${p}`);
  };
  const searchQuery = () => {
    console.log(text);
    fetchRecords(
      `https://employeesdataforapp.herokuapp.com/filterByName/${text}`
    );
  };

  const filterByDeparment = (e) => {
    console.log(e.target.value);
    setFilter({
      date: false,
      gender: false,
      department: e.target.value,
    });
    fetchRecords(
      `https://employeesdataforapp.herokuapp.com/fiterByDepartment/${e.target.value}`
    );
  };
  const filterByGender = (e) => {
    console.log(e.target.value);

    setFilter({
      date: false,
      gender: e.target.value,
      department: false,
    });
    fetchRecords(
      `https://employeesdataforapp.herokuapp.com/fiterByGender/${e.target.value}`
    );
  };
  const filterBydate = () => {
    let sD = date.startDate.split("-").join("/");
    let eD = date.endDate.split("-").join("/");
    //filterByDate
    setFilter({
      date: { sD, eD },
      gender: false,
      department: false,
    });
    fetchRecords(
      `https://employeesdataforapp.herokuapp.com/filterByDate?startdate=${sD}&enddate=${eD}`
    );
  };

  const handleEmployee = (data) => {
    console.log(data);
    localStorage.setItem("selected_emp_ddd", JSON.stringify(data));
    return navigate("/employeeDetail");
  };
  console.log(date);
  let startPage, endPage;
  if (+page > 5) {
    startPage = +page - 5;
    endPage = +page + 5;
   if (startPage >= 90) {
      startPage = 90;
      endPage = 100;
    }
  } else {
    startPage = 1;
    endPage = 10;
  }
  return (
    <>
      <h1>Welcome To Main Page</h1>
      <div>
        {" "}
        <input
          className="input_bar"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={searchQuery} className="search_Btn">
          Search Employee By Name
        </button>
      </div>
      <div className="filter_options">
        <div className="heading_filter">Filter Records</div>
        <div>
          <span className="filterBy">Using Depatment</span>
          <select
            name=""
            id=""
            onChange={filterByDeparment}
            className="input_bar"
          >
            <option value="">Select Department</option>
            <option value="Business Development">Business Development</option>
            <option value="Sales">Sales</option>
            <option value="Training">Training</option>
            <option value="Accounting">Accounting</option>
            <option value="Legal">Legal</option>
            <option value="Support">Support</option>
            <option value="Research and Development">
              Research and Development
            </option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div>
          <span className="filterBy">Using Joining Date</span>
          <span>Start Date</span>
          <input
            type="date"
            className="input_bar"
            name="startDate"
            onChange={(e) =>
              setDates({ ...date, [e.target.name]: e.target.value })
            }
          />
          <span>End Date</span>
          <input
            type="date"
            className="input_bar"
            name="endDate"
            onChange={(e) =>
              setDates({ ...date, [e.target.name]: e.target.value })
            }
          />
          <button onClick={filterBydate} className="search_Btn">
            Filter by Date
          </button>
        </div>
        <div>
          {/* fiterByGender/:gender */}
          <span className="filterBy">Using Gender</span>
          <select name="" id="" onChange={filterByGender} className="input_bar">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      {!records ? (
        <div>Loading...</div>
      ) : (
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Salary Paid</th>
            <th>Department</th>
            <th>Joining Date(YY-MM-DD)</th>
          </tr>

          {records.map((ele) => (
            <tr onClick={() => handleEmployee(ele)}>
              <td key={nanoid()}>{ele.first_name}</td>
              <td key={nanoid()}>{ele.last_name}</td>
              <td key={nanoid()}>{ele.email}</td>
              <td key={nanoid()}>{ele.gender}</td>
              <td key={nanoid()}>{ele.salary}</td>
              <td key={nanoid()}>{ele.department}</td>
              <td key={nanoid()}>{ele.joining_date}</td>
            </tr>
          ))}
        </table>
      )}
      <div className="change_page_btns">
        {(() => {
          let btns = [];
          for (let i = startPage; i <= endPage && 1000; i++) {
            btns.push(
              <button
                value={i}
                key={nanoid()}
                onClick={() => handlePageBtns(i)}
                id={i == page ? `colored` : null}
              >
                {i}
              </button>
            );
          }
          return btns;
        })()}
      </div>
    </>
  );
};
