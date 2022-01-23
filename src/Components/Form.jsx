import React from "react";

import PersonService from "../Classes/Person";

const Form = () => {
  const handleChangePerson = (value, type) => {
    var personSubject = PersonService.getInstance();
    switch (type) {
      case "setName":
          // calls person objects setName method and sets singleton BehaviorSubject's name property
        personSubject.setName(value);
        break;
      case "setSurname":
        personSubject.setSurname(value);
        break;
      case "setGSM":
        personSubject.setGSM(value);
        break;
      case "setEmail":
        personSubject.setEmail(value);
        break;
      default:
        return console.log("a");
    }
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              :{" "}
              <input
                onChange={(e) => handleChangePerson(e.target.value, "setName")}
              />
            </td>
          </tr>
          <tr>
            <td>Surname</td>
            <td>
              :{" "}
              <input
                onChange={(e) =>
                  handleChangePerson(e.target.value, "setSurname")
                }
              />
            </td>
          </tr>
          <tr>
            <td>GSM</td>
            <td>
              :{" "}
              <input
                onChange={(e) => handleChangePerson(e.target.value, "setGSM")}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              :{" "}
              <input
                onChange={(e) => handleChangePerson(e.target.value, "setEmail")}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Form;
