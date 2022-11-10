import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
