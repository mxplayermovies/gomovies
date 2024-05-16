import Image from 'next/image'
import Link from 'next/link'
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram
} from 'react-icons/fa'

const infoArray = [
  {
    title: 'About us',
    href: '/about'
  },
  {
    title: 'Contact us',
    href: '/contact'
  },
  {
    title: 'Terms & Conditions',
    href: '/terms'
  },
  {
    title: 'Privacy Policy',
    href: '/privacy'
  },
  {
    title: 'Press',
    href: '/press'
  }
]

const contactArray = [
  {
    title: 'Videos',
    href: '/videos'
  },
  {
    title: 'Gaming',
    href: '/gaming'
  },
  {
    title: 'Travel',
    href: '/travel'
  },
  {
    title: 'Music',
    href: '/music'
  },
  {
    title: 'Sports',
    href: '/sports'
  }
]

const Information = ({ contact }: { contact?: boolean }) => {
  return (
    <div className='flex flex-col text-gray-300'>
      {contact
        ? contactArray.map(item => (
            <Link
              href={item?.href}
              key={item?.title}
              className='hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group'
            >
              <span className='w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200' />
              {item?.title}
            </Link>
          ))
        : infoArray.map(item => (
            <Link
              href={item?.href}
              key={item?.title}
              className='hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group'
            >
              <span className='w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200' />
              {item?.title}
            </Link>
          ))}
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative'>
          About us{' '}
          <span className='w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10' />
        </h2>
        <Link href={'/'}>
          <Image
            src='https://watchonlinemovies.vercel.app/logo.png'
            alt='Logo'
            width={120}
            height={100}
            priority={true}
            className='cursor-pointer w-40 h-auto'
          />
        </Link>
        <div className='flex justify-center mt-4'>
          <a
            href='https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-600 mx-2'
          >
            <FaYoutube className='w-6 h-6' />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-600 mx-2'
          >
            <FaTwitter className='w-6 h-6' />
          </a>
          <a
            href='https://facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-600 mx-2'
          >
            <FaFacebook className='w-6 h-6' />
          </a>
          <a
            href='https://instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-600 mx-2'
          >
            <FaInstagram className='w-6 h-6' />
          </a>
          <a
            href='https://t.me/watchmovietvshow'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-600 mx-2'
          >
            <FaTelegram className='w-6 h-6' />
          </a>
        </div>
        <p className='text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72'>
          The Best Movies Platform HD Movies.
        </p>
      </div>
      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative'>
          Information
          <span className='w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10' />
        </h2>
        <Information />
      </div>
      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative'>
          Category
          <span className='w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10' />
        </h2>
        <Information contact={true} />
      </div>
      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative'>
          Connect with Us
          <span className='w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10' />
        </h2>
        <div className='text-gray-300 text-sm flex flex-col gap-2'>
       
        <p>
        For Request Movies Telegram:{' '}
        <span className='text-white font-medium'>
          <a
            href='https://t.me/watchmovietvshow'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-600 text-center justify-center'
          >
            @watchmovietvshow
          </a>
        </span>
      </p>
    
       <p>
            Email:{' '}
            <span className='text-white font-medium'>
              drtrailer2022@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
