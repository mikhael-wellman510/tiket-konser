import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../../css/style.css";
import { Input } from "@chakra-ui/react";

const ValidasiCheckin = () => {
  return (
    <div className="vv2">
      <div className="vv3">
        <div className="vv4">
          <h1>Masukan Id</h1>
          <Input />
        </div>

        <div className="vv5">
          <Button colorScheme="blue">Cari Id</Button>
        </div>

        <div className="vv5">
          <p className="vv6">Check In berhasil</p>
        </div>
      </div>
    </div>
  );
};

export default ValidasiCheckin;
