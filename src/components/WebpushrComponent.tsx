"use client" 
import React from 'react';

// Extend the Window interface to include the webpushr property
interface CustomWindow extends Window {
  webpushr?: (command: string, options?: { key: string }) => void;
}

const WebpushrComponent: React.FC = () => {
  const loadWebpushrScript = () => {
    // Use the custom Window interface
    const customWindow = window as CustomWindow;

    // Check if webpushr is already defined in customWindow
    if (typeof customWindow.webpushr !== 'undefined') return;

    const script = document.createElement('script');
    script.id = 'webpushr-jssdk';
    script.async = true;
    script.src = 'https://cdn.webpushr.com/app.min.js';

    // Create a promise to resolve when the script is loaded
    const scriptLoaded = new Promise<void>((resolve) => {
      script.onload = () => {
        resolve();
      };
    });

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize Webpushr after the script has loaded
    scriptLoaded.then(() => {
      if (typeof customWindow.webpushr !== 'undefined') {
        customWindow.webpushr('setup', {
          key: 'BFiNtErWPSlY1EdDYECv3rzPp2d5bVs46-O6I4iILsKtA2USCyBEakKcLs7yooH4Gj36tIvYtQtpZ0qZVfhHyAU'
        });
      } else {
        console.error('Webpushr script loaded but webpushr function is not available.');
      }
    });
  };

  // Load the Webpushr script once when the component mounts
  React.useEffect(() => {
    loadWebpushrScript();
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // This component doesn't render anything visible
};

export default WebpushrComponent;
