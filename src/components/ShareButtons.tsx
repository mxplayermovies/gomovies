"use client";
import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'next-share';

interface ShareButtonsProps {
  title: string;
  description: string;
  image: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, description, image }) => {
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
      <FacebookShareButton
        url={url}
        quote={description || title}
        hashtag="#drtrailer"
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <FacebookIcon size={48} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={description || title}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <TwitterIcon size={48} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={description || title}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <LinkedinIcon size={48} round />
      </LinkedinShareButton>

      <WhatsappShareButton
        url={url}
        title={description || title}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <WhatsappIcon size={48} round />
      </WhatsappShareButton>

      <EmailShareButton
        url={url}
        subject={title}
        body={description || "Check this out!"}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <EmailIcon size={48} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;

