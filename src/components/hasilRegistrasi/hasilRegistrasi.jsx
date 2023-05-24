import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const HasilRegistrasi = () => {
  const [kodeBoking, setKodeBoking] = useState("");
  const [nama, setNama] = useState("");
  const { getListTiketResult, detailTiketResult } = useSelector(
    (state) => state.tiketReducers
  );

  const dapatkanItem = () => {
    const locStorage = JSON.parse(localStorage.getItem("detailKontak"));

    if (locStorage) {
      console.log(locStorage);
      //   setNama(locStorage.nama), setKodeBoking(locStorage.kodeTiket);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setNama(detailTiketResult.nama);
    setKodeBoking(detailTiketResult.kodeTiket);
    dapatkanItem();
  }, []);

  return (
    <div className="hr">
      <Card>
        <CardBody>
          <div className="hr1">
            <div className="hr2">
              <div className="hr8">
                <h1>Registrasi Succes</h1>
              </div>
              <div className="hr3">
                <div>
                  <h1 className="hr5">Berikut adalah Kode Tiket Anda</h1>
                </div>
                <div className="hr6">
                  <h1>{nama}</h1>
                  <h1>{kodeBoking}</h1>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HasilRegistrasi;
