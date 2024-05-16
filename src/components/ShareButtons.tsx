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

const ShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'react-share-kit - Social Share Buttons';
  const shareDescription = 'Integrate social share buttons using react-share-kit.';

  const handleShareSuccess = (network) => {
    console.log(`Shared successfully on ${network}`);
  };

  const handleShareError = (network, error) => {
    console.error(`Error sharing on ${network}:`, error);
  };

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook Share Button */}
      <FacebookShare
        url={shareUrl}
        quote={shareTitle}
        hashtag="#reactsharekit"
        onSuccess={() => handleShareSuccess('Facebook')}
        onError={(error) => handleShareError('Facebook', error)}
      />

      {/* Twitter Share Button */}
      <TwitterShare
        url={shareUrl}
        title={shareTitle}
        hashtags={['#reactsharekit', '#frontend']}
        onSuccess={() => handleShareSuccess('Twitter')}
        onError={(error) => handleShareError('Twitter', error)}
      />

      {/* Linkedin Share Button */}
      <LinkedinShare
        url={shareUrl}
        onSuccess={() => handleShareSuccess('LinkedIn')}
        onError={(error) => handleShareError('LinkedIn', error)}
      />

      {/* Whatsapp Share Button */}
      <WhatsappShare
        url={shareUrl}
        title={shareTitle}
        separator=":: "
        onSuccess={() => handleShareSuccess('WhatsApp')}
        onError={(error) => handleShareError('WhatsApp', error)}
      />

      {/* Telegram Share Button */}
      <TelegramShare
        url={shareUrl}
        onSuccess={() => handleShareSuccess('Telegram')}
        onError={(error) => handleShareError('Telegram', error)}
      />

      {/* Email Share Button */}
      <EmailShare
        url={shareUrl}
        subject={shareTitle}
        body={shareDescription}
        onSuccess={() => handleShareSuccess('Email')}
        onError={(error) => handleShareError('Email', error)}
      />
    </div>
  );
};

export default ShareButtons;
