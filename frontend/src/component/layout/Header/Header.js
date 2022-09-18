import React from "react";
import "./Header.css";

const Header = () => {
  
  const orderLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
 
  return <>

    <header>
        <div className="container">
        Header
        </div>


    </header>


  </>;

};

export default Header;
