import React, { useState } from "react";

function Poem({ poem, poems,setPoems }) {
  const [isRead, setRead] = useState(false)
  const [isFav, setFav] = useState(true)

  const { id, title, content, author } = poem;

  function handleDelete() {
    (fetch(`http://localhost:8004/poems/${id}`,{
      method: 'DELETE'
    }))
    // console.log(poem)
    // console.log(poems)
    const updatedPoems = poems.filter((el) => el.id !== id)
    setPoems(updatedPoems)
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      {
        isRead ? <button onClick={() => setRead(false)}>Mark as read</button> : <button onClick={() => setRead(true)}>Mark as unread</button>
      }
      {
        isFav ?
          <button onClick={() => setFav(false)}>Add to Favorite</button> : <button onClick={() => setFav(true)}>Unfavorite</button>
      }
      <button onClick={handleDelete}>Delete Poem</button>
    </div>
  );
}

export default Poem;
