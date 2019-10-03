import React, { Component } from 'react';
//import FirstComponent from './components/learning-examples/FirstComponent'
//import SecondComponent from './components/learning-examples/SecondComponent'
//import ThirdComponent from './components/learning-examples/ThirdComponent'
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css';
<<<<<<< HEAD
import './bootstrap.css';
=======
import TodoApp from './Components/Todo/TodoApp';
import './bootstrap.css'
>>>>>>> parent of 152fb274... joel

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp />
=======
      <div className = "App">
        {/* My hello world yeet
        <FirstComponent></FirstComponent> */}
        <TodoApp/>
>>>>>>> parent of 152fb274... joel
      </div>
    );
  }
}

<<<<<<< HEAD
// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//          My Hello World
//          <FirstComponent></FirstComponent>
//          <SecondComponent></SecondComponent>
//          <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }
=======
// creating a component, you must extend the component class
// must also import component from react
class FirstComponent extends Component {
  render() {
    return (
      <div className = "App">
        This is my first component :)
      </div>
    )
  }
}
>>>>>>> parent of 152fb274... joel

export default App;