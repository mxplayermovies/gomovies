"use client";
import React from 'react';
import {
  FacebookShare,
  TwitterShare,
  LinkedinShare,
  WhatsappShare,
  TelegramShare,
} from 'react-share-kit';
import { EmailShare } from 'next-share'; // Use next-share for EmailShare

const SocialShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'react-share-kit - social share buttons for next & react apps.';
  const shareHashtag = '#react-share-kit';
  const shareBody = 'Check out this awesome social share kit!';

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook Share */}
      <FacebookShare
        url={shareUrl}
        quote={shareTitle}
        hashtag={shareHashtag}
      />

      {/* Twitter Share */}
      <TwitterShare
        url={shareUrl}
        title={shareTitle}
        hashtags={['#react-share-kit', '#front-end']}
      />

      {/* Linkedin Share */}
      <LinkedinShare url={shareUrl} />

      {/* Whatsapp Share */}
      <WhatsappShare
        url={shareUrl}
        title={shareTitle}
        separator=":: "
      />

      {/* Telegram Share */}
      <TelegramShare url={shareUrl} />

      {/* Email Share */}
      <EmailShare
        url={shareUrl}
        subject={'Next Share'}
        body="body"
      />
    </div>
  );
};

export default SocialShareButtons;

