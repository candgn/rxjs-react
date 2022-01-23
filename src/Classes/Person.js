import { BehaviorSubject } from "rxjs";

//creates a singleton BehaviorSubject 

class Person {
  personSubject;
  constructor() {
    this.personSubject = new BehaviorSubject({
      name: "",
      surname: "",
      gsm: "",
      email: "",
    });
  }

  //returns singleton observable
  get getPerson() {
    return this.personSubject.asObservable();
  }

  //sets singleton objects name, surname, gsm, email properties
  setName(value) {
    this.personSubject.next((singleton) => {
      return { ...singleton, name: value };
    });
  }

  setSurname(value) {
    this.personSubject.next((singleton) => {
      return { ...singleton, surname: value };
    });
  }

  setGSM(value) {
    this.personSubject.next((singleton) => {
      return { ...singleton, gsm: value };
    });
  }

  setEmail(value) {
    this.personSubject.next((singleton) => {
      return { ...singleton, email: value };
    });
  }
}

const PersonService = (function () {
  var instance;

  function createInstance() {
    var classObj = new Person();
    return classObj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default PersonService;
