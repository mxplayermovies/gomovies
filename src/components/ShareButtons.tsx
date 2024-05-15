"use client";
import React from 'react';
import {
  FacebookShare,
  TwitterShare,
  LinkedinShare,
  WhatsappShare,
  TelegramShare,
  EmailShare,
} from 'react-share-kit';

const SocialShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'react-share-kit - Social Share Buttons';
  const shareDescription = 'Integrate social share buttons using react-share-kit.';

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook Share Button */}
      <FacebookShare
        url={shareUrl}
        quote={shareTitle}
        hashtag="#reactsharekit"
      />

      {/* Twitter Share Button */}
      <TwitterShare
        url={shareUrl}
        title={shareTitle}
        hashtags={['#reactsharekit', '#frontend']}
      />

      {/* Linkedin Share Button */}
      <LinkedinShare
        url={shareUrl}
      />

      {/* Whatsapp Share Button */}
      <WhatsappShare
        url={shareUrl}
        title={shareTitle}
        separator=":: "
      />

      {/* Telegram Share Button */}
      <TelegramShare
        url={shareUrl}
      />

      {/* Email Share Button */}
      <EmailShare
        url={shareUrl}
        subject={shareTitle}
        body={shareDescription}
      />
    </div>
  );
};

export default SocialShareButtons;
