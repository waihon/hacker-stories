import * as React from 'react';

// Variables defined outside of the function's body will be
// defined once and not every time the function is called.
const welcome = {
  greeting: "Hey",
  title: "React"
}

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
