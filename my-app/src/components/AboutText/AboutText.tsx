import React from "react";

interface AboutTextProps {
  text: string;
}

export default function AboutText({ text }: AboutTextProps) {
  return <p className="mb-4 max-w-[500px]">{text}</p>;
}
