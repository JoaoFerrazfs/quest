import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
import Templates from "../../components/Templates";

function Home() {
  return (
      <div className="container">
        <Navbar />        
        <Templates/>  
      </div>
      
  );
}

export default Home;
