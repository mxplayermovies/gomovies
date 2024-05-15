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
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''; // Use current window location as share URL
  const shareQuote = 'Watch Online Movies™ - For Movies & TV Show.';
  const shareTitle = 'Watch Online Movies™ - For Movies & TV Show.';
  const shareSubject = 'Watch Online Latest Movies !!!';
  const shareBody = 'Check the Link Now';

  return (
    <div className="bg-transparent flex gap-2 justify-center p-2">
      {/* Facebook Share Button */}
      <FacebookShareButton url={shareUrl} quote={shareQuote} hashtag="#drtrailer">
        <FacebookIcon size={36} round />
      </FacebookShareButton>

      {/* Telegram Share Button */}
      <TelegramShareButton url={shareUrl} title={shareTitle}>
        <TelegramIcon size={36} round />
      </TelegramShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={shareUrl} title={shareTitle}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>

      {/* Whatsapp Share Button */}
      <WhatsappShareButton url={shareUrl} title={shareTitle} separator=":: ">
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>

      {/* Linkedin Share Button */}
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>

      {/* Email Share Button */}
      <EmailShareButton url={shareUrl} subject={shareSubject} body={shareBody}>
        <EmailIcon size={36} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;


