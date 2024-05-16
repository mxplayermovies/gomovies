import React, { useEffect } from 'react';

const WebpushrTracking = () => {
  useEffect(() => {
    // This useEffect will run once when the component mounts
    if (typeof window.webpushr !== 'undefined') return; // If already loaded, do nothing

    // Otherwise, load the Webpushr script
    const script = document.createElement('script');
    script.id = 'webpushr-jssdk';
    script.async = true;
    script.src = 'https://cdn.webpushr.com/app.min.js';

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Initialize Webpushr with your key
    window.webpushr('setup', { key: '2640e9e56d774bb31e51d297df9302e6' });

    // Clean up when the component is unmounted
    return () => {
      // Optional cleanup (if needed)
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return null; // No need to render anything for this component
};

export default WebpushrTracking;
