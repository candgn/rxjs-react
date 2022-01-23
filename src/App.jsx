import React from "react";

import Form from "./Components/Form";
import FormViewer from "./Components/FormViewer";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: "50%", height: "50vh", border: "1px solid #00000040" }}
      >
        <Form />
      </div>
      <div
        style={{ width: "50%", height: "50vh", border: "1px solid #00000040" }}
      >
        <FormViewer />
      </div>
    </div>
  );
}

export default App;
