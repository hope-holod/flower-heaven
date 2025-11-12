import React from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-5xl mb-6 uppercase" style={{ fontFamily: "'EB Garamond', serif" }}>{title}</h2>
  );
}