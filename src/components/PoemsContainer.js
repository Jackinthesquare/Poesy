import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems, setPoems }) {

  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {
        poems.map((poem) => {
          return(
            <Poem key={poem.id} poem={poem} poems={poems} setPoems={setPoems} />
          )
        })
      }
     
    </div>
  );
}

export default PoemsContainer;
