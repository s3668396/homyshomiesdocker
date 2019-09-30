import React, {Component} from 'react';//
//import logo from './logo.svg';
import './App.css';
import TodoApp from './Components/Todo/TodoApp';
import './bootstrap.css'
import MapAPI from './Components/Todo/MapAPI.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className = "App">
          {/* My hello world yeet
          <FirstComponent></FirstComponent> */}
          <TodoApp/>
        </div>
      </div>
    )
  }
}

// creating a component, you must extend the component class
// // must also import component from react
// class FirstComponent extends Component {
//   render() {
//     return (
//       <div className = "App">
//         This is my first component :)
//       </div>
//     )
//   }
// }


export default App;