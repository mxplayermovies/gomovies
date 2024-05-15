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
  const shareUrl = 'https://github.com/next-share'; // Example share URL
  const shareTitle = 'Watch Online Movies™ - For Movies & TV Show.';
  const shareHashtag = '#drtrailer';
  const shareSubject = 'Watch Online Movies™ - For Movies & TV Show.';
  const shareBody = 'Check out this cool share button!';

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook Share Button */}
      <FacebookShareButton url={shareUrl} quote={shareTitle} hashtag={shareHashtag}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      {/* Telegram Share Button */}
      <TelegramShareButton url={shareUrl} title={shareTitle}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={shareUrl} title={shareTitle}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      {/* Whatsapp Share Button */}
      <WhatsappShareButton url={shareUrl} title={shareTitle} separator="::">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      {/* Linkedin Share Button */}
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      {/* Email Share Button */}
      <EmailShareButton url={shareUrl} subject={shareSubject} body={shareBody}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
