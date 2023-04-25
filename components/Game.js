import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react'


import WorldClock from '@components/WorldClock';

const Game = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://uwatchfree.vercel.app/sports.json');
      
      const data = await response.json();
      setSports(data);
    };
    fetchData();
  }, []);
  
  const now = new Date();
  
  // Set the timezone to UTC
  const options = { timeZone: 'UTC' };
  
  return (
    <div>
      {sports.map((sport) => {
        // Convert the game's date, start time and end time to UTC
        const gameDate = new Date(sport.date + "T" + sport.startTime + ":00Z");
        const gameEndDate = new Date(sport.date + "T" + sport.endTime + ":00Z");

        // Convert the game's start and end time to the local timezone
        const startLocalTime = gameDate.toLocaleString('en-US', options);
        const endLocalTime = gameEndDate.toLocaleString('en-US', options);

        // Assign the converted end time to the endTime variable
        const endTime = gameEndDate.toLocaleString('en-US', options);
        
        let status = "";
        let statusclassName = "";
        if (now > gameEndDate) {
          status = "Finished";
          statusclassName = "text-red-500";
        } else if (now >= gameDate && now <= gameEndDate) {
          status = "Live";
          statusclassName = "text-green-500";
        } else if (now < gameDate) {
          status = "Upcoming";
          statusclassName = "text-yellow-500 ";
        } else {
          status = "Ended";
          statusclassName = "text-red-500";
        }

        return (
          <div key={sport.gameid} >
              <div className="text-xl font-bold text-center mx-5 my-5 leading-none tracking-tight text-white">
          <WorldClock /> </div>
      
          <div className="text-center">
  <h2 className="inline-flex items-center my-5 justify-center text-4xl font-bold text-orange-500/75">{sport.sname}  <Image src={sport.simg} className="w-10 h-10 mr-2 " loading="lazy" alt={sport.sname} /></h2>
</div>

            
            <h2 className="text-4xl mt-5 font-bold text-center leading-none tracking-tight " style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>{sport.title}</h2>
            
          
            <div>
            <p className="text-2xl mt-5 font-bold text-center leading-none tracking-tight " style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }} >{sport.description}</p>
            <div className="text-2xl mt-5 font-bold text-center leading-none tracking-tight text-black">
          <p>Channel Broadcasting </p>
        </div>
            <div className="flex items-center justify-center font-bold text-2xl  my-5" style={{ color: "#C0C0C0", textShadow: "5px 5px 2px #000" }}>
  <img src={sport.chimg} className="w-10 h-10 mr-2" loading="lazy" alt={sport.chname} />
  {sport.chname}
</div>


            <div className="flex flex-col items-center">
  <h2 className="text-2xl font-bold text-center my-5 text-yellow-500 leading-none tracking-tight mb-5" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Current Game Status</h2>
  <h1 className={`text-3xl font-bold  leading-none tracking-tight flex  items-center justify-center ${statusclassName} blink`}>
    {status}
  </h1>
</div>

 </div>
        
              <div className="text-center">
  <a href={sport.chlink} className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
    Watch Now
  </a>
</div>

        

            {/* Display the game status */}
          

          </div>
        )
      })}
        <style jsx>{`
    .blink {
      animation: blinker 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;
    }

    @keyframes blinker {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
     
    }
  `}</style>
    </div>
  );
};

export default Game;
