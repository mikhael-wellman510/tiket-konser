import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homepage/homepage";
import Registrasi from "./components/registrasi/registrasi";
import HasilRegistrasi from "./components/hasilRegistrasi/hasilRegistrasi";
import Admin from "./components/admin/admin";
import ListDaftarPemesanan from "./components/listDaftarPemesanan/listDaftarPemesanan";
import Login from "./components/login/login";
import ValidasiCheckin from "./components/validasiCheckin/validasiCheckin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/registrasi" Component={Registrasi} />
          <Route path="/hasilRegistrasi" Component={HasilRegistrasi} />
          <Route path="/admin" Component={Admin} />
          <Route path="/listDaftarPemesanan" Component={ListDaftarPemesanan} />
          <Route path="/login" Component={Login} />
          <Route path="/validasiCheckin" Component={ValidasiCheckin} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
