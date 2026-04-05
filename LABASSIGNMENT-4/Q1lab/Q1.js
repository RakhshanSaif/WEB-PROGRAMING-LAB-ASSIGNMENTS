import React from "react";
import ReactDOM from "react-dom/client";

function Welcome(props) {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial",
      color: "darkblue"
    }}>
      <h1>Hello {props.name}!</h1>
      <h2>Welcome to {props.city}</h2>
      <p>This is a simple React app using props and functional components.</p>
      <div style={{ marginTop: "20px", color: "black" }}>
        <p>24BKT0164</p>
        <p>MD RAKHSHAN SAIF</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome name="Rakhshan" city="Chennai" />);
