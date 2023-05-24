import React from "react";
import "../../css/style.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="hp1">
      <div className="hp2">
        <h1>Segera pesan tiket anda !</h1>
        <h1>Tiket Terbatas</h1>
      </div>
      <div>
        <Button onClick={() => navigate("/registrasi")} colorScheme="blue">
          Registrasi
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
