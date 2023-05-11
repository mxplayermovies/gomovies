import { useState, useEffect } from "react";


const AdComponent = () => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://inklinkor.com/tag.min.js';
      script.setAttribute('data-zone', 5934558);
      script.setAttribute('data-id', 'my-ad-container'); // added data-id attribute
      document.body.appendChild(script);
    }, 120000);

    return () => clearTimeout(timeout);
  }, []);

  const handleAdClose = () => {
    const adContainer = document.getElementById('my-ad-container');
    adContainer.style.display = 'none';
  }

  return (
    <div>
      <div id="my-ad-container"></div>
      <button onClick={handleAdClose}>Close Ad</button>
    </div>
  );
};
export default AdComponent;