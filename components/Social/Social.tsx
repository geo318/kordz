import Link from 'next/link'
import { Apple, Facebook, Instagram, SoundCloud, Spotify, Youtube } from '..'
import { twMerge } from 'tailwind-merge'

export const Social = ({ mobile = false }) => (
  <div
    className={twMerge(
      'gap-6 items-center justify-center',
      mobile
        ? 'md:hidden w-full flex md:relative md:bg-transparent sticky inset-x-0 bottom-0 p-5 md:p-0 bg-blue-600 bg-opacity-90'
        : 'hidden mt-6 md:flex'
    )}
  >
    <Link
      className='hover:opacity-80'
      target='_blank'
      href='https://www.facebook.com/kordzmusic'
    >
      <Facebook />
    </Link>
    <Link
      className='hover:opacity-80'
      target='_blank'
      href='https://www.instagram.com/kordzmusic'
    >
      <Instagram />
    </Link>
    <Link
      className='hover:opacity-80'
      target='_blank'
      href='https://soundcloud.com/kord_z'
    >
      <SoundCloud />
    </Link>
    <Link
      className='hover:opacity-80'
      target='_blank'
      href='https://open.spotify.com/artist/2Z3OVOANdKELuWdATTmhQN'
    >
      <Spotify />
    </Link>
    <Link
      className='hover:opacity-80'
      target='_blank'
      href='https://www.youtube.com/@Akord18'
    >
      <Youtube />
    </Link>
    <Link
      className='hover:opacity-80'
      target='_blank'
      href='https://music.apple.com/us/artist/kordz/1522785867'
    >
      <Apple />
    </Link>
  </div>
)
