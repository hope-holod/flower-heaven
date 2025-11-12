import React from "react";

export default function FlowersDecoration() {
  return (
    <div className="-z-10">
      <img
        src="/src/components/FlowersDecoration/flower2.png"
        alt="Цветок"
        className="absolute left-0 top-[600px] transform -translate-y-1/2 "
      />
      <img
        src="/src/components/FlowersDecoration/flower3.png"
        alt="Цветок"
        className="absolute right-0 top-[1300px] transform -translate-y-1/2"
      />
    <img
        src="/src/components/FlowersDecoration/flower4.png"
        alt="Цветок"
        className="absolute left-0 top-[2650px] transform -translate-y-1/2"
      />
    </div>
  );
}
