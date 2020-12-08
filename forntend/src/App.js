import "./App.css";
import Header from "./components/HeaderComponent/header";
import Login from "./components/LoginComponent/login";
import RegisterComponent from "./components/RegisterComponent/register";

function App() {
  return (
    <div>
      <div className="custom-container">
        <Header/>
        <RegisterComponent/>
      </div>
    </div>
  )
}

export default App;
