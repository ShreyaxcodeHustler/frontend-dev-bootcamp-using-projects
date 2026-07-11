import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] =useState("");
  const [email, setEmail] =useState("");
  const [error, setError] =useState({});
  const [track, setTrack] =useState("");
  const [experience, setExperience] =useState("");
  const [teamSize, setTeamSize] = useState("");
  const [agree, setAgree] = useState(false);

  function validateStep1(){
    const newErrors={};//const newErrors = {}; — we build a fresh errors object each time we validate, rather than editing the old one. This matters because if a field used to have an error and now doesn't, we want it gone — starting fresh guarantees that.
    if(fullName.trim() === ""){
      newErrors.fullName = "Full Name is required";
    }
    if(!email.includes("@")){
      newErrors.email ="Email must be valid";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function validateStep2() {
    const newErrors = {};

    if (track === "") {
      newErrors.track = "Please select a track";
    }

    if (experience === "") {
      newErrors.experience = "Please select your experience level";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  }
  function validateStep3() {
    const newErrors = {};

    if (teamSize === "") {
      newErrors.teamSize = "Please select a team size";
    }

    if (!agree) {
      newErrors.agree = "You must confirm before continuing";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  }
  return (
    <div>
      <h1>Survey Form</h1>
      <p>Current Step:{step}</p>
      {step ===1 && (
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} 
          onChange={(e) => setFullName(e.target.value)}/>
          {error.fullName && <p style={{color:"red"}}>{error.fullName}</p>}

          <label>Email</label>
          <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          {error.email && <p style={{color:"red"}}>{error.email}</p>}
          <button onClick={() => {
            if(validateStep1()){
              setStep(2);
            }
          }}>Next</button>
          </div>
      )}

      {step === 2 && (
        <div>
          <label>Track:</label>
          <select value={track} onChange={(e) => setTrack(e.target.value)}>
            <option value="">Select a track</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
          {error.track && <p style={{color:"red"}}>{error.track}</p>}
          <label>Experience:</label>
          <div>
            <label>
          <input type="radio" name="experience" value="0-1 years" checked={experience === "0-1 years"} 
          onChange={(e) => setExperience(e.target.value)}/>0-1 years</label>
          <label><input type="radio" name="experience" value="1-3 yrs" checked={experience === "1-3 yrs"}
          onChange={(e)=> setExperience(e.target.value)}/>1-3 years</label>
          </div>
          {error.experience && <p style={{color:"red"}}>{error.experience}</p>}
          <button onClick={() => setStep(1)}>Back
          </button>
          <button onClick={() => {
            if(validateStep2()){
              setStep(3);
            }
          }}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Team Size:</label>
          <select value={teamSize} 
          onChange={(e)=> setTeamSize=(e.target.value)}>
            <option value="">Select team size</option>
            <option value="Solo">Solo</option>
            <option value="pair">Pair</option>
            <option value="small team">Small Team(3-4)</option>
          </select>
          {error.teamSize && <p style={{color:"red"}}>{error.teamSize}</p>}
          <div>
            <label>
              <input type="checkbox"
              checked={agree}
              onChange={(e)=> setAgree(e.target.checked)}
              />
              I confirm my info is accurate
            </label>
          </div>
          {error.agree && <p style={{color:"red"}}>{error.agree}</p>}
          <button onClick= {()=>setStep(2)}>Back</button>
          <button onClick={()=> {
            if(validateStep1(3)){
              setStep(4);
            }
          }
          }>Next</button>
      </div>
      )}
      {step === 4 && (
      <div>
        <h2>Review Your Answers</h2>
        <p>Full Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Track: {track}</p>
        <p>Experience: {experience}</p>
        <p>Team Size: {teamSize}</p>
        <p>Agreed to terms: {agree ? "Yes" : "No"}</p>

        <button onClick={() => setStep(3)}>Back</button>
        <button onClick={() => alert("Form submitted!")}>Submit</button>
      </div>
    )}
    </div>
  );
}

export default App;

/*const [step, setStep] = useState(1); — this is the piece of state that decides which fields are currently visible. We start on step 1. When we click "Next," we'll do setStep(2), and so on. This single number is what powers the whole multi-step behavior.
const [errors, setErrors] = useState({}); — notice this starts as {}, an empty object, not a string like Day 6's error. 
That's because this form has multiple fields, each needing its own error message. We'll store them like { fullName: "Name is required", email: "" } — one key per field. This is new, but it's really just "many Day-6 errors, bundled into one object."*/


//{step === 1 && (...)} — same conditional-rendering trick from Day 6, but now controlling an entire block of fields, not just an error message. When step is 1, this whole <div> renders. Change step to anything else, and none of it renders. This is the entire mechanism behind "steps" — no fancy routing needed, just conditionally showing different chunks of JSX based on one number.
