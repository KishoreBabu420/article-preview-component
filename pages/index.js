import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='px-8 mt-10'>
      <Head>
        <title>Article Preview Component</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='mx-auto lg:2-3/5 lg:flex lg:flex-row lg:h-auto'>
        <img
          src='/images/drawers.jpg'
          alt='table'
          className='w-full h-48 rounded-tr-md rounded-tl-md lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none'
        />

        <div className='p-8 bg-white rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md'>
          <h2 className='font-semibold text-gray-700'>
            Shift overall look and fell by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className='mt-4 text-sm text-gray-600'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I&apos;ve got some simple tips to
            help you make any room feel complete.
          </p>
          <div className='flex items-center mt-8'>
            <div className='flex items-center'>
              <img
                src='/images/avatar-michelle.jpg'
                alt='person'
                className='w-10 h-10 rounded-full '
              />
              <div className='ml-4'>
                <p className='text-sm font-semibold text-gray-800'>
                  Michelle Appleton
                </p>
                <p className='text-sm text-gray-600'>28 June 2020</p>
              </div>
            </div>
            <div className='flex items-center justify-center w-8 h-8 ml-auto bg-gray-200 rounded-full'>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
                <path
                  fill='#6E8098'
                  d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
