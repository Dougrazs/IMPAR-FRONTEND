import React from "react";
import logo from "assets/logo.svg";
function Header() {
  return (
    <div className="p-3 bg-gradient-to-l from-Impar-LightPurple to-Impar-Purple">
      <img className="h-10" alt="Logo da empresa" src={logo} />
    </div>
  );
}

export default Header;
