import Image from 'next/image'
import Link from 'next/link'
import GenreDropDown from './GenreDropDown'
import SearchInput from './SearchInput'
import ThemeToggler from './ThemeToggler'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0'>
      {/* Logo */}
      <Link href={'/'}>
        <Image
          src='https://watchonlinemovies.vercel.app/logo.png'
          alt='Logo'
          width={280}
          height={100}
          priority={true}
          className='cursor-pointer w-40 h-auto'
        />
      </Link>
      <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
        The Best Movies Platform HD Movies.
        </p>
      <div className="flex justify-center mt-4">
              <a href="https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
      <Link
        rel='sitemap'
        type='application/xml'
        title='Sitemap'
        href='https://watchonlinemovies.vercel.app/sitemap.xml'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <Link
        rel='icon'
        type='image/x-icon'
        href='/favicon.ico'
      />
      <Link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <Link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <Link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <Link rel='manifest' href='/site.webmanifest' />

      {/* Others */}
      <div className='text-white flex space-x-2 items-center'>
        {/* Genre */}
        <GenreDropDown />
        {/* Search */}
        <SearchInput />
        {/* Theme */}
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Header
