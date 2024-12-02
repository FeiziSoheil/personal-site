import React from "react";
import './SkillsCard.css';
import { useMousePosition } from "../../Hooks/useMouse";

export default function SkillsCard({ icon, className }) {
  const mouseHandler = useMousePosition();

  return (
    <div
      style={{ "--card-bg": '#191919' }}
      onMouseMove={mouseHandler}
      className="skill-card border-card w-40 h-40  opacity-70 cursor-pointer flex rounded-lg overflow-hidden items-center justify-center relative "
    >
      <div className={`relative z-20 ${className} skill-icon`}>
        {icon}
      </div>
    </div>
  );
}


