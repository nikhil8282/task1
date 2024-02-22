import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Feedback from "./pages/feedback/Feedback";

function App() {
  return (
    <>
      <Navbar />
      {/* <Main/> */}
      <Feedback/>
    </>
  );
}

export default App;
