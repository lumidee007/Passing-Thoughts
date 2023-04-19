import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export const AddThoughtForms = ({ addThought }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  let Newthought = {
    id: generateId(),
    text: text,
    expiresAt: getNewExpirationTime()
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      addThought(Newthought);
      setText("");
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
