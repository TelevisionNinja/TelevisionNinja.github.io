import './index.scss';

export default function AnimatedLetters({ letterClass, strArray, idx }) {
  return strArray.map((char, i) => (
    <span className={`${letterClass} _${i + idx}`}>
      {char}
    </span>
  ));
}
