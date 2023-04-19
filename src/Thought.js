import React, { useEffect } from "react";

export function Thought(props) {
  const { thought, removeThought } = props;

  // Using function to remove thought
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  // Using useEffect to remove thought
  // useEffect(() => {
  //   const timeRemaining = thought.expiresAt - Date.now();
  //   let setID = setTimeout(() => {
  //     removeThought(thought.id);
  //   }, timeRemaining);
  //   return () => clearTimeout(setID);
  // }, [thought, removeThought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
