import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white",textAlign: "center"  }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Amrutam Company assignment-1</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project is created by Abhishek Nigam. Please click the below link in order to view the assignment.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/desktopseventyfive" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ASSIGNMENT
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
