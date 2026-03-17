import { useState, useEffect } from 'react';

const words = ['Partnerships', 'Discovery', 'Reviews', 'Distribution', 'Revenue'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (subIndex < words[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setPause(true);
          setTimeout(() => {
            setPause(false);
            setIsDeleting(true);
          }, PAUSE_DURATION);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, pause]);

  return (
    <span className="inline-block min-w-[1ch]">
      <span className="text-[#1FA6A6]">
        {words[index].substring(0, subIndex)}
      </span>
      <span className="inline-block w-[2px] h-[1em] bg-brand-charcoal/30 ml-1 align-middle animate-cursor-blink"></span>
    </span>
  );
}
