import "./App.scss";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [stepTwo, setStepTwo] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <>
        {stepTwo === true ? (
          <StepTwo
            setStepTwo={setStepTwo}
            name={name}
            email={email}
            password={password}
            setActive={setActive}
          />
        ) : (
          <Form
            name={name}
            email={email}
            password={password}
            password2={password2}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setPassword2={setPassword2}
            setStepTwo={setStepTwo}
            setActive={setActive}
            active={active}
          />
        )}
        <Footer text={"Simple Form with React by Raphaël"} />
      </>
    </div>
  );
}

export default App;
