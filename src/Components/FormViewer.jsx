import React from "react";
import PersonService from "../Classes/Person";
import UseObservable from "../Helpers/UseObservable";
const FormViewer = () => {
  const person  = UseObservable(
    {observable:PersonService.getInstance().getPerson,initialState:{
      name: "",
      surname: "",
      gsm: "",
      email: "",
    }}
  );

  

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>: {person.name}</td>
          </tr>
          <tr>
            <td>Surname</td>
            <td>: {person.surname}</td>
          </tr>
          <tr>
            <td>GSM</td>
            <td>: {person.gsm}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: {person.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormViewer;
