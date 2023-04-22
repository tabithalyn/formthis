import { Button } from 'react-bootstrap';
import { FormEvent, useState } from 'react';
import { ProfileForm } from './components/ProfileForm';
import { AccountForm } from './components/AccountForm';
import { PreferenceForm } from './components/PreferenceForm';
import useMultiForm from './useMultiForm';

type FormData = {
  email: string,
  password: string,
  name: string,
  username: string,
  age: string,
  country: string
}

const INITIAL_DATA:FormData = {
  email: "",
  password: "",
  name: "",
  username: "",
  age: "",
  country: ""
}

// https://youtu.be/uDCBSnWkuH0?t=782

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, back, isLastStep, next } = useMultiForm([
    <AccountForm {...data} updateFields={updateFields} />,
    <ProfileForm {...data} updateFields={updateFields} />,
    <PreferenceForm {...data} updateFields={updateFields} />
  ]);

  function onSubmit(e:FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Account Creation Successful!");
  }

  return (
  <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial",
    maxWidth: "max-content",
  }}>
  
  <form onSubmit={onSubmit}>
    <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
      {currentStepIndex + 1} / {steps.length}
    </div>
    {step}
    <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
      {!isFirstStep && (
        <Button variant="secondary" type="button" onClick={back}>Back</Button>
      )}
      <Button variant="primary" type="submit">
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </div>
  </form>
    
  </div>
  );
}

export default App;
