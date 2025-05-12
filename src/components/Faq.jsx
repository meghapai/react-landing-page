import React, { useState } from "react";
import "./Faq.css";

function Faq(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !isOpen);
  };

  return (
    <>
      <div className="faq-container">
        <p className="question">
          {props.question}
          <button className="faq" onClick={toggle}>
            +
          </button>
        </p>
        <p className="answer">{isOpen && props.answer}</p>
        <hr />
      </div>
    </>
  );
}

export default Faq;
