import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Watch Online Movies™ Contact Us</title>
        <meta
          name="description"
          content="Watch now the Best TV shows and Movies"
        />
        <meta
          name="keywords"
          content="Watch Online Movies, streaming, latest movies, online tv, latest free movies, watch latest movies online, latest full movies online"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Watch Online Movies™ | Watch Movies, TV-Series & Sports Live Online Free" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Watch Online Movies™ | Watch Movies, TV-Series & Sports Live Online Free" />
        <meta property="og:description" content="Watch Movies, TV-Series & Sports Live Online Free" />
        <meta property="og:url" content="https://watchonlinemovies.vercel.app" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image" content="https://watchonlinemovies.vercel.app/og_image.jpg" />
        <meta property="og:image:secure_url" content="https://watchonlinemovies.vercel.app/og_image.jpg" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:width" content="720" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Watch Online Movies™" />
        <meta name="twitter:description" content="Watch Movies, TV-Series & Sports Live Online Free" />
        <meta name="twitter:image" content="https://watchonlinemovies.vercel.app/og_image.jpg" />
        <meta name="google-site-verification" content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-3 lg:px-6">
              <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
              <p className="text-gray-500 mb-6">
                For Business Enquiries, please contact us at the email address below:
              </p>
              <p className="text-gray-500 mb-6">We will get back to you ASAP.</p>
              <p className="text-gray-500 mb-6">Email: drtrailer2022@gmail.com</p>
            </div>
            <div className="w-full md:w-6/12 px-3 lg:px-6">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="form-control w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="message"
                    rows={3}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="mb-6 text-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="sendCopy"
                  />
                  <label htmlFor="sendCopy" className="inline-block text-gray-800">
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none active:bg-blue-800 transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
