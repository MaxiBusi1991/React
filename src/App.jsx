import Layout from "./pages/Layout";
// import "./css/globals.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
