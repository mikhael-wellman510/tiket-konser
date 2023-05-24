import React from "react";
import "../../css/style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="n">
      <div className="n1">
        <div>
          <p onClick={() => navigate("/")}>E-Tiket Online Mikhael</p>
        </div>
        <div className="n2">
          <Link to="/">Home</Link>
          <Link to="/registrasi">Registrasi</Link>
          <Link to="/login">Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
