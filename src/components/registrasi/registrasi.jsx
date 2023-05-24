import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "../../css/style.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTiket, detailTiket, getListTiket } from "../../actions/tiketAction";

const Registrasi = () => {
  const navigate = useNavigate();
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;

  const dispatch = useDispatch();

  const { addTiketResult } = useSelector((state) => state.tiketReducers);

  const [kodeTiket, setKodeBoking] = useState(randomNumber);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [gender, setGender] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (addTiketResult) {
      setNama("");
      setUmur("");
      setGender("");
      setAlamat("");
    }
  }, [addTiketResult]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((nama, umur, gender, alamat)) {
      dispatch(
        addTiket({
          kodeTiket: kodeTiket,
          nama: nama,
          umur: umur,
          gender: gender,
          alamat: alamat,
        })
      );

      dispatch(
        detailTiket({
          nama: nama,
          kodeTiket: kodeTiket,
        })
      );
      navigate("/hasilRegistrasi");
    } else {
      alert("Silahkan Isi Semua");
    }
  };

  return (
    <div className="r1">
      <Card>
        <CardBody>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="r2">
              <div className="r3">
                <p>Silahkan Isi Data Diri Anda</p>
              </div>
              <div className="r4">
                <p>Nama</p>
                <Input
                  value={nama}
                  nama="nama"
                  onChange={(e) => setNama(e.target.value)}
                />
                <p>Umur</p>
                <Input
                  value={umur}
                  nama="umur"
                  onChange={(e) => setUmur(e.target.value)}
                />
                <p>gender</p>
                <Input
                  value={gender}
                  nama="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                <p>Alamat</p>
                <Input
                  value={alamat}
                  nama="nama"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <div className="r8">
                <Button
                  //   onClick={() => {
                  //     dispatch(detailTiket(tiket.nama));
                  //   }}
                  type="submit"
                  colorScheme="blue"
                >
                  Submit
                </Button>
                <Button onClick={() => navigate("/")} colorScheme="red">
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Registrasi;
