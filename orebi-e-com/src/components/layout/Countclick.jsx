import React, { useState } from "react";
import Container from "../common/Container";

const Countclick = () => {
  const [count, setCount] = useState(0);
  const pluseBtn = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const mainusBtn = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="py-20">
      <Container>
        <button
          className="bg-teal-700 text-white text-2xl p-4"
          onClick={mainusBtn}
        >
          Minus-
        </button>
        <h3 className="bg-teal-500 text-white text-2xl inline-block p-4">
          {count}
        </h3>
        <button
          className="bg-teal-700 text-white text-2xl p-4"
          onClick={pluseBtn}
        >
          Plus+
        </button>
      </Container>
    </div>
  );
};

export default Countclick;
