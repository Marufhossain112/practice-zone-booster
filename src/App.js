import logo from "./logo.svg";
import "./App.css";
import Club from "./components/Club/Club";
import Header from "./components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import Qna from "./components/QNA/Qna";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Header></Header> */}
      <Club></Club>
      <Qna></Qna>
    </div>
  );
}
export default App;
