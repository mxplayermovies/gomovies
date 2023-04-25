import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

export default function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // const currentTime = moment().tz('Europe/Paris').format('HH:mm:ss');
         //   const currentTime = moment.tz('Europe/Madrid').format('HH:mm:ss');
         const currentTime = moment.tz('Europe/London').format('HH:mm:ss');
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container text-2xl font-bold text-center leading-none tracking-tight text-blue-600">
      <h2>Current time in UK (GMT+1)</h2>
      <div className="clock">{time}</div>
      <style jsx>{`
        .clock {
          font-size: 36px;
          font-weight: bold;
          color: silver;
        }
      `}</style>
    </div>
  );
}
