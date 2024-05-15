import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Creator of SRON",
          "Compiler Designer",
          "Interpreter Designer",
          "Aspiring Teacher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0,
        delay:1,
        cursor:"<",
      }}
    />
  );
}

export default Type;
