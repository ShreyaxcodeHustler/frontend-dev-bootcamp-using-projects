import { useState } from "react";

function App(){
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(){
    if (email===""){
      setError("Email is required");
      return;
    }

    if(!email.includes("@")){
      setError("Email is invalid");
      return;
    }
    setError("");
    alert("Submitted:" + email);
  }
  return (
    <div> 
      <input 
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}

export default App;
/*function handleSubmit() { ... } — instead of writing the logic inline like () => setCount(...), we've pulled it into a named function. 
This is common once the logic gets longer than one line — keeps the JSX readable.

Notice onClick={handleSubmit} — no parentheses after handleSubmit here. We want to hand React the function itself, not call it immediately (same "don't run it now" idea from Day 5).
The two if blocks with return; — same guard-clause pattern from Day 3's to-do list. Check for a bad case, set the error, exit early.


!email.includes("@") — .includes() checks if a string contains something.
 The ! in front means "not" — so this reads as "if the email does NOT include an @ symbol." Not perfect email validation (that needs a proper pattern, called regex, which we'll touch in Day 7), but good enough to demonstrate the concept.
{error && <p style={{ color: "red" }}>{error}</p>} — this is a new and important JSX pattern: conditional rendering. In JavaScript, && normally means "and," but here it's being used as a trick: if error is an empty string (""), JavaScript treats that as false-ish, so nothing after && runs — nothing renders. If error has actual text in it, it's true-ish, so React renders the <p> that follows. This is how React conditionally shows/hides things — no if/else needed directly in JSX.
style={{ color: "red" }} — inline styling in React. Notice the double curly braces: the outer {} means "JS expression coming," and the inner {} is an actual JavaScript object — style always takes an object, e.g. { color: "red", fontSize: "14px" } for multiple properties.

*/