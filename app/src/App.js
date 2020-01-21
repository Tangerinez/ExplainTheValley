import React from "react";
import "./App.scss";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        name="Company1"
        industry="SaaS/Cloud Services"
        location="Paris"
        employees="15 to 50"
        jobs="8"
      />
      <Card
        name="Company2"
        industry="Artificial Intelligence/Machine Learning, SaaS"
        location="Clichy"
        employees="15 to 50"
        jobs="0"
      />
      <Card
        name="Company3"
        industry="Digital, SaaS/Cloud Services"
        location="Paris, Lebege, Lille"
        employees="50 to 250"
        jobs="18"
      />
      <Card
        name="Company4"
        industry="E-commerce, IT/Digital, SaaS/Cloud Services"
        location="Toulose"
        employees="15 to 50"
        jobs="3"
      />
      <Card
        name="Company5"
        industry="SaaS/Cloud Services"
        location="Barcelona"
        employees="50 to 250"
        jobs="0"
      />
      <Card
        name="Company6"
        industry="Home Care Services, Organization/Management"
        location="Dumbo, Paris"
        employees="15 to 50"
        jobs="2"
      />
    </div>
  );
}

export default App;
