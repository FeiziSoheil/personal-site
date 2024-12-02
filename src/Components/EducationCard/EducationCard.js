import React from "react";

export default function EducationCard({ title, content }) {
  return (
    <>
      <h3 className="font-montserrat font-bold text-lg">{title}</h3>
      <p className="font-roboto opacity-65 mt-2 ">{content}</p>
    </>
  );
}
