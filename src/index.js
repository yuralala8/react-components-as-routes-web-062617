import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
 
/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
/* add the navbar component */
const Navbar = () => 
  <div>
    <NavLink 
      to="/"
      /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink 
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink 
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;
 
const Home = () => <h1>Home</h1>;
 
const About = () => <h1>About</h1>;
 
const Login = () => 
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>;
 
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/login" render={Login} />
      </div>
    </Router>
  );
};
 
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);