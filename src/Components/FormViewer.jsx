import React from "react";
import PersonService from "../Classes/Person";
const FormViewer = () => {
  const [person, setPerson] = React.useState({
    name: "",
    surname: "",
    gsm: "",
    email: "",
  });
  //subscribes to person service and get singleton person object values
  React.useState(() => {
    var personSubject = PersonService.getInstance();
    personSubject.getPerson.subscribe((person) => {
      setPerson(person);
    });
  }, []);
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
