import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Creator of SRON Language",
          "Compiler Engineer",
          "C++ Expert",
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
