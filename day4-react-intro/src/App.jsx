/*function App(){
  return(
    <h1>Hello i am learning React</h1>
  );
}
export default App;*/ //u might want to run the above given code first.this constitute the basic react code.


/*function App() { ... } — a component is really just a JavaScript function. The only rule: its name must start with a capital letter (that's how React tells "this is a component" apart from a regular HTML tag).
return (...) — every component must return something to display. What's inside the parentheses looks like HTML, but it's actually JSX — a special syntax that lets you write HTML-looking code directly inside JavaScript.
export default App; — this makes App available to be imported and used elsewhere — specifically, in main.jsx, which is what actually puts it on the page.*/

/*function App(){
  return(
    <h1>Hello i am learning React</h1>
    <p>React is a JavaScript library for building user interfaces.</p>
  );
}
export default App;*/ //run this as well

//simple explanation for the error. a component can only return one element. if you want to return multiple elements, you need to wrap them in a single parent element, like a <div> or a React fragment.

/*function App() {
  return (
    <div>
      <h1>Hello, I'm learning React</h1>
      <p>This is my profile card project.</p>
    </div>
  );
}

export default App;*/

/*function App() {
  return (
    <div>
      <img src="https://placehold.co/100" alt="Profile" />
      <h2>Your Name</h2>
      <p>Learning frontend development, one project a day.</p>
    </div>
  );
}

export default App;*/

//separate the function cards in the next file 

/*function ProfileCard() {
  return (
    <div>
      <img src="https://placehold.co/100" alt="Profile" />
      <h2>Your Name</h2>
      <p>Learning frontend development, one project a day.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}

export default App;*/

function ProfileCard(props) {
  return (
    <div>
      <img src="https://placehold.co/100" alt="Profile" />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <ProfileCard name="Coder who" bio="Learning frontend development." />
      <ProfileCard name="Coder who as well" bio="Learning backend development." />
    </div>
  );
}

export default App;