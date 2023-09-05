import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar.";
import Home from "./Pages/Home";
import Form from "./Component/Form";

function App() {
  return (
    <div className=" bg-[#F0F8FF]">
      <div className=" bg-gray-700 ">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
