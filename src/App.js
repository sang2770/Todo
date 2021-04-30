import React, {Component} from "react"
import './App.css';
import Work from "./Work"
class App extends Component {
  render()
  {
    return (
      <div className="Todo">
        <div className="Constain">
          <h1 className="Header">Todolist</h1>
          <div className="Box">
            <div className="Box_Add">
              <Work/>
            </div>
          </div>
        </div>
       
      </div>
      
    )
  }

}

export default App;
// Sang
