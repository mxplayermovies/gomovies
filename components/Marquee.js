import React from 'react';
import styles from '../styles/Marquee.module.css';

const Marquee = ({ text, fontSize, color, isBold, speed = 10 }) => {
  const marqueeRef = React.useRef();

  React.useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeWidth = marqueeElement.offsetWidth;
    const textWidth = marqueeElement.children[0].offsetWidth;

    if (textWidth > marqueeWidth) {
      const animationDuration = (textWidth / speed).toFixed(2);
      marqueeElement.style.animationDuration = `${animationDuration}s`;
    }
  }, [text, speed]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.marquee}
        ref={marqueeRef}
        style={{
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <div
          className={styles.content}
          style={{
            whiteSpace: 'nowrap',
            fontSize,
            color,
            fontWeight: isBold ? 'bold' : 'normal',
            textShadow: '2px 2px 5px #000',
            animation: `${styles.scroll} ${speed}s linear infinite`,
            transform: 'translate3d(100%, 0, 0)',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            willChange: 'transform',
          
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
