

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
  // e.preventDefult();
  alert("are you sure?", e.target.value);
}

  return (
  
    <div>
      <form  onSubmit={handlesubmit}>
          <input type="text" onChange={handleinput} />
          <button type='submit'>Submit</button>
      </form>

      <p onClick={handlepera}>i am from para</p>
      <button onClick={handleclick}>click me</button>
    </div>
  )
}

export default App
