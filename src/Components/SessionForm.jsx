import React, { useState } from "react";

export const SessionForm = () => {
  const [info, setInfo] = useState({
    fname: "",
    email: "",
    psw: "",
    add: "",
    mno: ""
  });
  const [array, setArray] = useState(
    JSON.parse(sessionStorage.getItem("Array")) || []
  );

  const Handlechange = (e) => {
    console.log(e.target);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    console.log(e.target);
    setArray([...array, info]);
    sessionStorage.setItem("Array", JSON.stringify([...array, info]));
  };

  const HandleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    sessionStorage.setItem("Array", JSON.stringify(newArray));
  };

  return (
    <>
      <div>
        <h1>
          <u>Session Storage Registration</u>
        </h1>
        <form action="" className="text-center mt-5 text-primary">
          <label htmlFor="fname" className="pe-3 fw-bold">
            <b> Name : </b>
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter Your Name"
            value={info.fname}
            onChange={Handlechange}
          />
          <br />
          <br />
          <label htmlFor="email" className="pe-3 fw-bold">
            <b> Email : </b>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={info.email}
            onChange={Handlechange}
          />
          <br />
          <br />
          <label htmlFor="psw" className="pe-3 fw-bold">
            <b>Password : </b>
          </label>
          <input
            type="password"
            name="psw"
            id="psw"
            placeholder=" Enter Your Password"
            value={info.psw}
            onChange={Handlechange}
          />
          <br />
          <br />
          <label htmlFor="add" className="pe-3 fw-bold">
            <b>Address : </b>
          </label>
          <input
            type="text"
            id="add"
            name="add"
            value={info.add}
            onChange={Handlechange}
            placeholder="Enter Your Address"
          />
          <br />
          <br />
          <label htmlFor="mno" className="pe-3 fw-bold">
            <b>Mobile Number : </b>
          </label>
          <input
            type="number"
            id="mno"
            name="mno"
            value={info.mno}
            onChange={Handlechange}
            placeholder="Enter Your Mobile"
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={HandleSubmit}
            className="p-2 px-5 text-center bg-primary fw-bold text-light border-0 "
          >
            Submit
          </button>
        </form>
      </div>
      <hr />
      <hr />
      <hr />
      <table
        className="table table-bordered border-primary w-75 mt-5 ms-5"
        border={3}
      >
        <thead>
          <th className="ps-5 border border-primary">Name</th>
          <th className="ps-5 border border-primary">Email</th>
          <th className="ps-5 border border-primary">Password</th>
          <th className="ps-5 border border-primary">Address</th>
          <th className="ps-5 border border-primary">Mobile Number</th>
          <th className="ps-5 border border-primary">Action</th>
        </thead>
        <tbody>
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.psw}</td>
                <td>{item.add}</td>
                <td>{item.mno}</td>
                <td>
                  <button
                    onClick={() => HandleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SessionForm;
