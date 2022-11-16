import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Footer from "./shared/Footer";
import { PayPalScriptProvider, } from "@paypal/react-paypal-js";

function App() {
  return (
    <BrowserRouter>
      <PayPalScriptProvider options={{ "client-id": "AbaQj8WYiTEGaPreqhGYEQjRU63iecbzNbAePJZaKGn_B8UqMc8mHnLOnvrZNbRQoH6uHfB1t-0Og7tU" }}>
        <AppRouter />
        <Footer />
      </PayPalScriptProvider>
    </BrowserRouter>
  );
}

export default App;

