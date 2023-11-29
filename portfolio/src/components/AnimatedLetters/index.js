import './index.scss';
import {
  useState,
  useEffect
} from 'react';

export default function AnimatedLetters({ letterClass, strArray, idx, delay }) {
  const [newLetterClass, setLetterClass] = useState(letterClass);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  });

  function handleMouseEnter() {
    setLetterClass('text-bounce');
    setTimeout(() => setLetterClass('text-no-bounce'), 1000);
  }

  function noFunction() {
    return;
  }

  return strArray.map((char, i) => (
    <span
      onMouseEnter={isLoading ? noFunction : handleMouseEnter}
      key={char + i}
      className={`${newLetterClass} _${i + idx}`}>
      {char}
    </span>
  ));
}
