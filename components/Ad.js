import { useState, useEffect } from "react";
import styles from "../styles/Ad.module.css";

const Ad = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    const displayAd = () => {
      setIsVisible(true);
    };
  
    const timeout = setTimeout(() => {
      displayAd(); // display the first ad immediately
      const interval = setInterval(() => {
        displayAd(); // display subsequent ads every 10 minutes
      }, 600000);
      return () => clearInterval(interval);
    }, 50000); // 5 seconds delay before displaying the first ad
  
    return () => clearTimeout(timeout);
  }, []);
 
  
  
  
  return (
    <>
      {isVisible && (
        <div className={styles.adContainer}>
          <div className={styles.adContent}>
            <span className={styles.closeButton} onClick={handleClose}>
              &times;
            </span>
               <h1 className="text-center font-bold text-4xl  py-5" style={{ color: "#40D7BC", textShadow: "2px 2px 5px #000" }} > Go Movies Advertisment.</h1>
            <video src="./official-trailer.mp4" autoPlay controls muted loop width="640" height="360" />

          
          </div>
        </div>
      )}
    </>
  );
};

export default Ad;
//{showAd && <Ad onClose={handleAdClose} />}
         