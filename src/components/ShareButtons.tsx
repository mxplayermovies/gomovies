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

const SocialShareButtons = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Watch Online Movies™ - The Best Movies Platform HD Movies.';

  return (
    <div className="flex justify-center gap-4 p-4">
      {/* Facebook Share Button */}
      <FacebookShareButton url={shareUrl} quote={shareTitle} hashtag="#nextshare">
        <FacebookIcon size={36} round />
      </FacebookShareButton>

      {/* Pinterest Share Button */}
      <PinterestShareButton url={shareUrl} media={shareTitle}>
        <PinterestIcon size={36} round />
      </PinterestShareButton>

      {/* Reddit Share Button */}
      <RedditShareButton url={shareUrl} title={shareTitle}>
        <RedditIcon size={36} round />
      </RedditShareButton>

      {/* Telegram Share Button */}
      <TelegramShareButton url={shareUrl} title={shareTitle}>
        <TelegramIcon size={36} round />
      </TelegramShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={shareUrl} title={shareTitle}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={shareUrl} title={shareTitle} separator=":: ">
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>

      {/* Facebook Messenger Share Button */}
      <FacebookMessengerShareButton url={shareUrl} appId={''}>
        <FacebookMessengerIcon size={36} round />
      </FacebookMessengerShareButton>

      {/* Email Share Button */}
      <EmailShareButton url={shareUrl} subject={'Next Share'} body="Check out this cool share button!">
        <EmailIcon size={36} round />
      </EmailShareButton>
    </div>
  );
};

export default SocialShareButtons;
