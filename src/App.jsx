import { Routes, Route} from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
import HomePages from "./pages/HomePages";
import FaqPages from "./pages/FaqPages";
import ClasPages from "./pages/ClasPages";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import Login from "./users/Login";
import { Auth } from "./users/Auth";
import ProgramPages from "./pages/ProgramPages";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePages}/>
        <Route path="/login" Component={Auth}/> {Login}
        <Route path="/kelas" Component={ClasPages}/>
        <Route path="/faq" Component={FaqPages}/>
        <Route path="/syaratketen" Component={SyaratKetentuan}/>
        <Route path="/program" Component={ProgramPages}/>
      </Routes>
      <FooterComponents/>
    </div>
  );
}

export default App
