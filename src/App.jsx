

import './App.css'

function App() {

function handleclick(){
  alert("you are click on click me");
}

function handlepera (){
  alert("your cursor on a para");
}

function handleinput(e){
  console.log("value now :", e.target.value);
}
function handlesubmit(e){
  e.preventDefault();
  alert("are you sure?", e.target.value);
}

  return (
  <div className="container">
    <h1>Simple React Form</h1>
    <p className="subtitle">Enter your name and test event handling</p>

    <form onSubmit={handlesubmit}>
      <input type="text" placeholder="Enter your name" onChange={handleinput} />
      <button type="submit">Submit</button>
    </form>

    <p onClick={handlepera}>Click this paragraph</p>
    <button onClick={handleclick}>Click Me</button>

    <div className="footer-text">
      React Event Handling Practice Project
    </div>
  </div>
);

}

export default App
