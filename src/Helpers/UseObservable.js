import { useEffect, useState } from "react";

const UseObservable = ({ observable, initialState }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const subscription = observable.subscribe(setValue);
    return () => subscription.unsubscribe();
    // eslint-disable-next-line
  }, []);

  return !value ? initialState : value;
};

export default UseObservable;
