
import { useCallback } from "react";

export const useMousePosition = () => {
  const mouseHandler = useCallback((e) => {
    const card = e.currentTarget;
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }, []);

  return mouseHandler;
};