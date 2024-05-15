"use client";
import React from 'react';
import {
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  EmailShareButton,
  FacebookIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  FacebookMessengerIcon,
  EmailIcon,
} from 'next-share';

const ShareButtons = ({ title, description, image }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const handleShareSuccess = () => {
    console.log('Share successful!');
  };

  const handleShareError = (error) => {
    console.error('Share failed:', error);
  };

  return (
    <div className="bg-transparent flex gap-4 justify-center p-4">
      {/* Facebook Share Button */}
      <FacebookShareButton
        url={url}
        quote={description || title}
        hashtag="#drtrailer"
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      {/* Pinterest Share Button */}
      <PinterestShareButton
        url={url}
        media={image}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      {/* Reddit Share Button */}
      <RedditShareButton
        url={url}
        title={title}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>

      {/* Telegram Share Button */}
      <TelegramShareButton
        url={url}
        title={title}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton
        url={url}
        title={description || title}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton
        url={url}
        title={description || title}
        separator="::"
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      {/* Facebook Messenger Share Button */}
      <FacebookMessengerShareButton
        url={url}
        appId={''} // Add your Facebook App ID here
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      {/* Email Share Button */}
      <EmailShareButton
        url={url}
        subject={title}
        body={description || 'Check this out!'}
        onClick={handleShareSuccess}
        onError={handleShareError}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
