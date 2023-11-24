import './index.scss';
import { useState } from 'react';

export default function AnimatedLetters({ letterClass, strArray, idx }) {
  const [newLetterClass, setLetterClass] = useState(letterClass);

  function handleMouseEnter() {
    setLetterClass('text-bounce');
    setTimeout(() => setLetterClass('text-no-bounce'), 1000);
  }

  return strArray.map((char, i) => (
    <span
      onMouseEnter={handleMouseEnter}
      key={char + i}
      className={`${newLetterClass} _${i + idx}`}>
      {char}
    </span>
  ));
}
