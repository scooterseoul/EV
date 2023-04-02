import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCars from "./components/AllCars";
import SingleCar from "./components/SingleCar";
import AddCar from "./components/AddCar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllCars />} />
        <Route path="/cars/:id" element={<SingleCar />} />
        <Route path="/add" element={<AddCar />} />
      </Routes>
    </>
  );
}

export default App;
