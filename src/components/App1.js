import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// const App = () => {
//   return <div> App</div>;
// };

// export default App;

////////////////////////////
//VAR 1 BAD!!
//EXAMPLE with BrouserRouter and why do not use anchor
//gg298
/*
const PageOne = () => {
  return (
    <div>
      PageOne
      <a href="/pagetwo"> Go to PAGE TWO</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <a href="/"> Go to PAGE ONE</a>
      <button>Click me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
*/
//////////////////////////
const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo"> Go to PAGE TWO</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/"> Go to PAGE ONE</Link>
      <button>Click me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
