import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./Style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={1200}
        limit={3}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
