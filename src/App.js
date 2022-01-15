import "./App.css";
import { useState } from 'react';



function App() {


  const [input, setInput] = useState(0);

  const [number, setNumber] = useState(0);

  const [total, setTotal] = useState(0);


  function handleNumberChange(e) {
    setNumber(Number(e.target.value));
  }


  function calculateTotal() {
    setTotal(number *18.02);
  }


  return (
    <div className="App">
      

      <div>
        <h1>Convert unit</h1>
         
        
        <input 
          type="number"
          placeholder="Enter the value from watch"
          onChange={handleNumberChange}
          // onChange={(e) => setInput(e.target.value)}
            />

          &nbsp; mmol/L &nbsp;&nbsp;
          
          
          <br></br>
          <br></br>

          
          <button type="button" value="Submit" onClick={calculateTotal}>Convert</button> 

      </div>
      



      <div>

        <br></br>
        <h2>{total}&nbsp; mg/dL</h2>
        
        {/* <input type="number" /> */}
        

      </div>
      



    </div>
  );
}

export default App;