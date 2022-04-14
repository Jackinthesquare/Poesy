import React, { useState } from "react";

function NewPoemForm({ poems, setPoems }) {
  const [newTitle, setTitle] = useState('')
  const [newAuthor, setAuthor] = useState('')
  const [newContent, setContent] = useState('')
  const newPoem = { newTitle, newAuthor, newContent}

  const handleSubmit = async (e) => {
    e.preventdefault();
    let req = await fetch('http://localhost:8004/poems', {
      method: 'POST',
      header: {'CONTENT-TYPE':'application/json'},
      body: JSON.stringify(newPoem)
    })
    let res = await req.json()
    console.log("res is", res)
   
    setPoems({...poems,newPoem})
  }



  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" value={newTitle} />
      <input onChange={(e) => setAuthor(e.target.value)} placeholder="Author" value={newAuthor}/>
      <textarea onChange={(e) => setContent(e.target.value)} placeholder="Write your masterpiece here..." rows={10} value={newContent} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
