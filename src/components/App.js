import React, {useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems,setPoems] = useState([])
  const [hide,setHide] = useState(true)

  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:8004/poems')
      let res = await req.json()
      setPoems(res)
    }) ()
  }, [])
  // console.log(poems)

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setHide(!hide)}>Show/hide new poem form</button>
        {hide ? <NewPoemForm poems={poems} setPoems={setPoems} /> : null}
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems} />
    </div>
  );
}

export default App;
