import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import ContentSinglePage from "./components/ContentSinglePage";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ContentSinglePage />} path="/content/:contentid" />
      </Routes>
      <Footer />
      {/* <h1>Fresh project</h1> */}
    </div>
  );
}

export default App;
