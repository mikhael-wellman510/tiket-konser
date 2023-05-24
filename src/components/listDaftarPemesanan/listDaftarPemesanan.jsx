import React, { useEffect } from "react";
import "../../css/style.css";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getListTiket } from "../../actions/tiketAction";
const ListDaftarPemesanan = () => {
  const { getListTiketResult, getListTiketLoading, getListTiketError } =
    useSelector((state) => state.tiketReducers);

  const dispatch = useDispatch();
  useEffect(() => {
    //get List Kontak
    console.log("1. masuk did mount");

    dispatch(getListTiket());
  }, [dispatch]);
  return (
    <div className="li8">
      <div className="li2">
        {getListTiketResult ? (
          getListTiketResult.map((tiket) => {
            return (
              <Card key={tiket.id}>
                <CardBody>
                  <div className="l1">
                    <p>Kode Tiket : </p>
                    <p>Nama : {tiket.nama} </p>
                    <p>Umur : {tiket.umur} </p>
                    <p>Jenis Kelamin : {tiket.gender}</p>
                    <p>Alamat : {tiket.alamat} </p>
                  </div>
                </CardBody>
              </Card>
            );
          })
        ) : getListTiketLoading ? (
          <p>Loading . . .</p>
        ) : (
          <p>{getListTiketError ? getListTiketError : "data kosong"}</p>
        )}
      </div>
    </div>
  );
};

export default ListDaftarPemesanan;
