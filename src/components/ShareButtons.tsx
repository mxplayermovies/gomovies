"use client";
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

const ShareButtons = () => {
 
  const shareTitle = 'Watch Online Movies™ - For Movies & TV Show.';
  const shareHashtag = '#drtrailer';
  const shareSubject = 'Watch Online Movies™ - For Movies & TV Show.';
  const shareBody = 'Check out this cool share button!';

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const handleShareSuccess = () => {
    console.log('Share successful!');
    // Additional logic for share success
  };

  // Error handling function compatible with React's event handler type
  const handleShareError: React.ReactEventHandler<HTMLButtonElement> = (event) => {
    const error = new Error('Share button error');
    console.error('Share error:', error);
    // Additional logic for share error
  };

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook Share Button */}
      <FacebookShareButton url={url} quote={shareTitle} hashtag={shareHashtag}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
    
        <FacebookIcon size={36} round />
    
      </FacebookShareButton>

      {/* Telegram Share Button */}
      <TelegramShareButton url={url} title={shareTitle}
       onClick={handleShareSuccess}
       onError={handleShareError}
      >
    
        <TelegramIcon size={36} round />
       
      </TelegramShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={url} title={shareTitle}
       onClick={handleShareSuccess}
       onError={handleShareError}
      >
        <TwitterIcon size={36} round />
     
      </TwitterShareButton>

      {/* Whatsapp Share Button */}
      <WhatsappShareButton url={url} title={shareTitle} separator="::"
       onClick={handleShareSuccess}
       onError={handleShareError}
      >
        <WhatsappIcon size={36} round />
      
      </WhatsappShareButton>

      {/* Linkedin Share Button */}
      <LinkedinShareButton url={url}
       onClick={handleShareSuccess}
       onError={handleShareError}
      >
    
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>

      {/* Email Share Button */}
      <EmailShareButton url={url} subject={shareSubject} body={shareBody}
       onClick={handleShareSuccess}
       onError={handleShareError}
      >
        <EmailIcon size={36} round />
   
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
