import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../../css/style.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="a1">
      <Button
        onClick={() => navigate("/listDaftarPemesanan")}
        colorScheme="green"
      >
        List Daftar Pemesanan
      </Button>
      <Button onClick={() => navigate("/validasiCheckin")} colorScheme="blue">
        Validasi Check In
      </Button>
    </div>
  );
};

export default Admin;
