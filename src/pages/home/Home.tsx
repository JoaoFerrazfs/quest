import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
import Templates from "../../components/Templates";
import MyForms from "../../components/MyForms";

function Home() {
  return (
      <div className="container">
        <Navbar />        
        <Templates/>  
        <MyForms/>  
      </div>
      
  );
}

export default Home;
