import React from 'react'
import Head from 'next/head'
import Script from 'next/script';


const Tearms = () => {

  const containerStyle = {
    margin: '24px auto',
    padding: '0 24px',
    maxWidth: '960px',
  };

  const sectionStyle = {
    marginBottom: '32px',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const listItemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none',
  };

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://watchonlinemovies.vercel.app/author/ytmag/',
        name: 'Dr Trailer',
        url: 'https://watchonlinemovies.vercel.app/author/ytmag/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://watchonlinemovies.vercel.app/#organization',
        name: 'Watch Online Movies? - Explore. Discover. Download.',
        url: 'https://watchonlinemovies.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://watchonlinemovies.vercel.app/#website',
        url: 'https://watchonlinemovies.vercel.app',
        name: 'Watch Online Movies? - Explore. Discover. Download.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://watchonlinemovies.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://watchonlinemovies.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://watchonlinemovies.vercel.app/#webpage',
        url: 'https://watchonlinemovies.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://watchonlinemovies.vercel.app/author/ytmag/',
          name: 'Dr Trailer',
          url: 'https://watchonlinemovies.vercel.app/author/ytmag/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://watchonlinemovies.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://watchonlinemovies.vercel.app/',
            url: 'https://watchonlinemovies.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://watchonlinemovies.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://watchonlinemovies.vercel.app/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://watchonlinemovies.vercel.app/#organization',
              name: 'Watch Online Movies? - Explore. Discover. Download.',
              url: 'https://watchonlinemovies.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://watchonlinemovies.vercel.app/',
            url: 'https://watchonlinemovies.vercel.app/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://watchonlinemovies.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://watchonlinemovies.vercel.app/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://watchonlinemovies.vercel.app/#organization',
              name: 'Watch Online Movies? - Explore. Discover. Download.',
              url: 'https://watchonlinemovies.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://watchonlinemovies.vercel.app/',
            url: 'https://watchonlinemovies.vercel.app/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://watchonlinemovies.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://watchonlinemovies.vercel.app/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://watchonlinemovies.vercel.app/#organization',
              name: 'Watch Online Movies? - Explore. Discover. Download.',
              url: 'https://watchonlinemovies.vercel.app'
            }
          }
        ]
      }
    ]
  })

 

  return (
    <div>
        <Head>
        <title>Watch Online Movies? | Terms of Use</title>
        <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
          name='keywords'
          content='watchonlinemovies,watch online movies,free movies, movies online,watch movies online,watch movies free,download movies,123movies,gomovies,putlocker,putlockers,soap2day'
        />
          <meta
            name='description'
            content='Explore. Discover. Download - Free Your Desired Software.'
          />
          <link rel='canonical' href='https://watchonlinemovies.vercel.app/intro/tearms' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Watch Online Movies? '
          />
          <meta
            property='og:description'
            content='Watch Online Movies? - Stream HD movies and TV series for free on Watch Online Movies. Explore, stream, and download full-length movies and shows in HD quality without registration.'
          />
          <meta property='og:url' content='https://watchonlinemovies.vercel.app/intro/tearms/' />
          <meta
            property='og:site_name'
            content='Watch Online Movies? '
          />
          <meta
            property='og:image'
            content='https://watchonlinemovies.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/jpg' />
          <meta
            name='application-name'
            content='Watch Online Movies? '
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-site-verification'
            content='BZNZaUyoS1nXyRfa99f4VJ3ABKZUZhkKB0pZ3DU3L8s'
          />
          <meta
            name='facebook-domain-verification'
            content='du918bycikmo1jw78wcl9ih6ziphd7'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dmdzuqt3p027t2adn'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BO9Qy2O9EbKU_YukDi7nzisKRKUCYLKCtcH-1BKBkl8AvD_HZ7_14PKDq-OeXGOMF-wwdKnvKspavxYcr4_BgEA' });
          `
          }}
        />
        </Head>
        <Script src="../../propler/ads.js" defer />
        <Script src="../../propler/ads2.js" defer />
     
<div style={containerStyle}>

<section style={sectionStyle}>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto', marginBottom: '12px', width: '100%', padding: '0 12px' }}>
      <h1 style={headingStyle}>Terms and Conditions</h1>
    
      <h2 style={headingStyle}>1. Changes</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      We may occasionally change these Terms, so we encourage you to review the Terms periodically. If you continue to use the Services after we change the Terms, you accept all changes.
      </p>
      </ul>
      <h2 style={headingStyle}>2. Registration and Access Controls</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      You are responsible for maintaining the confidentiality of your login names and passwords and you accept responsibility for all activities, charges, and damages that occur under your account. If you have reason to believe that someone is using your account without your permission, you should contact us immediately. We will not be responsible for any loss or damage resulting from your failure to notify us of unauthorized use.
      </p>
      </ul>
      <h2 style={headingStyle}>3. Third - party ads</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      We use third-party advertising companies to serve ads when you visit our Website. These companies may use information (not including your name, address email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you.
      </p>
      </ul>
      <h2 style={headingStyle}>Contact for Advertisement</h2>
    

      {/* Add more sections with similar structure */}

      <p style={{ color: '#666' }}>
      Please review these terms and conditions carefully before using our website. If you have any questions or concerns, please contact us at <a style={linkStyle} href="mailto:softwatebay@outlook.com">softwatebay@outlook.com</a>.
      </p>
    </div>
  </div>
</section>


      </div>
    </div>
  )
}

export default Tearms