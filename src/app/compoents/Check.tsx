import React from 'react'
import Image from 'next/image'

const Check = () => {
  return (
    <div className='flex justify-center items-center space-x-5 p-5 bg-gray-100 rounded-lg bg-black'>
      <div className='flex flex-col items-center'>
        <Image
          src='/android.png'
          width={500}
          height={500}
          alt='exp://u.expo.dev/update/6ba79249-7a26-4879-9cb8-880c18a8cb60'
          className='border-2 border-gray-800 rounded-lg bg-black'
        />

        <p className='mt-2 text-lg text-white-800'>Scan for android</p>
      </div>

      <div className='flex flex-col items-center'>
        <Image
          src='/ios.png'
          width={500}
          height={500}
          alt='exp://u.expo.dev/update/bbbd645e-9326-4279-8792-87d9bd15fc3b'
          className='border-2 border-gray-800 rounded-lg bg-black'
        />
        <p className='mt-2 text-lg text-white-800'>Scan for iOS</p>
      </div>
    </div>
  )
}

export default Check;