import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'
import Nav from './components/shared/Nav'
import StylesheetDemo from './components/routes/StylesheetDemo'
import About from './components/routes/About'

const App = (props) => (
  <Fragment>
  <Route path='/' component={Nav} />
  <Route exact path='/' component={Home} />
  <Route exact path='/stylesheet' component={StylesheetDemo} />
  <Route exact path='/about' component={About} />
  </Fragment>
)

export default withRouter(App)
// export default App;

// import logo from './logo.svg';
// import './App.css';
// // import React, { Fragment } from 'react'
// // import { Route, withRouter } from 'react-router-dom'
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
