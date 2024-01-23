import React from 'react'
import Image from 'next/image'

const Check = () => {
  return (
    <div className='flex justify-center items-center space-x-5 p-5 rounded-lg bg-black'>
      <div className='flex flex-col items-center bg-black'>
        <Image
          src='/a.png'
          width={500}
          height={500}
          alt='exp://u.expo.dev/update/6ba79249-7a26-4879-9cb8-880c18a8cb60'
          className='border-2 border-gray-800 rounded-lg bg-black'
        />

        <p className='mt-2 text-lg text-white-800'>Scan for android</p>
      </div>

      <div className='flex flex-col items-center'>
        <Image
          src='/i.png'
          width={500}
          height={500}
          alt='exp://u.expo.dev/update/bbbd645e-9326-4279-8792-87d9bd15fc3b'
          className='border-2 border-gray-800 rounded-lg'
        />
        <p className='mt-2 text-lg text-white-800'>Scan for iOS</p>
      </div>
      <p className="text-center text-md text-white-700 mt-4">
        Download the Expo app from the App Store or Google Play to get started.
      </p>
    </div>
  )
}

export default Check;