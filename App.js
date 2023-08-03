
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body_container"><br></br>
          <div className="form_container">
            <input className="a" type="text"name="First Name"placeholder="Enter First Name"required></input><br></br><br></br>
            <input className="a" type="text"name="Last Name"placeholder="Enter Last Name"required></input><br></br><br></br>
            <input  className="a"type="text"name="Email"placeholder="Enter Email"required></input><br></br><br></br>
            <input className="a" type="Number"name="Contact Number"placeholder="Enter Contact Number"required></input><br></br><br></br>
            <input className="a" type="text"name="Event Type"placeholder="Enter Event Type"required></input><br></br><br></br>
            <div className="form_a">
              <input className="b" type="Time"name="Time"placeholder="time"></input>
            </div><br></br>
            <input className="c" type="Text"name="Time"placeholder="Time"required></input><br></br><br></br>
            <input  className="d" type="text"name="Enter Address"placeholder="Enter Address"required></input><br></br>
             <br></br>
            <div className="sum">
              <button>Save</button><button>Discard</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
