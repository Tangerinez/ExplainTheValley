import React from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import companyInfo from "./info";

function App() {
  return (
    <div className="App">
      {companyInfo.map((info, i) => (
        <Card
          name={info.name}
          industry={info.industry}
          location={info.location}
          employees={info.employees}
          jobs={info.jobs}
          key={i}
        />
      ))}
    </div>
  );
}

export default App;
