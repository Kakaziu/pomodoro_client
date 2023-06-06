import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
