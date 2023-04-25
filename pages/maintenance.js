import React, { useState, useEffect } from 'react';

const Maintenance = ({ setIsMaintenanceMode }) => {
// const [remainingTime, setRemainingTime] = useState(1800); // 30 minutes in seconds
 //const [remainingTime, setRemainingTime] = useState(10800); // 3 hours in seconds
const [remainingTime, setRemainingTime] = useState(7200); // 2 hours in seconds 
 
 useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsMaintenanceMode(false);
    }
  }, [remainingTime, setIsMaintenanceMode]);


  //30 min timer
 // const formatTime = time => {
 //const minutes = Math.floor(time / 60);
 // const seconds = time % 60;
 // return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
 //};
 
  //2 Hrs timer
 const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  //3 Hrs timer
  // const formatTime = time => {
   // const hours = Math.floor(time / 3600);
  //  const minutes = Math.floor((time % 3600) / 60);
   // const seconds = time % 60;
   // return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
 // };
   

  return (
    <div>
          <div className=" bg-gray-600 shadow flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#000000", textShadow: "2px 2px 2px #000" }}>

      <h1 className="flex flex-col text-center py-5 font-bold text-4xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Site under maintenance</h1>
    
      <h2 className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Estimated downtime remaining: {formatTime(remainingTime)}</h2>
          <iframe src="https://embed.lottiefiles.com/animation/56119" width={300}  height={385} ></iframe>
     
      <h2 className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>We're currently updating our site. We'll be back soon!</h2>
    
    </div>
    </div>
  );
};

export default Maintenance;
