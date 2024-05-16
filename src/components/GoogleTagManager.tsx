// components/GoogleTagManager.tsx
import React from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ gtmId }) => {
  return (
    <>
      {/* Google Tag Manager */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}');
          `,
        }}
      />
      {/* End Google Tag Manager */}
    </>
  );
};

export default GoogleTagManager;
